import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { genearteShortCode, isValidUrl }  from '../Helpers';
import { logEvent } from '../logger';
const UrlShortenerForm = ({ onShorten }) => {
    const [url, setUrl] = useState([{ longurl: "", validity: 30,shortcode: "" }]);
    const handleChange = (i, field, value) => {
        const updated = [...url];
        updated[i][field] = value;
        setUrl(updated);
    };
    const handleShorten = () => {
        const results = [];
        for (let { longurl, validity, shortcode } of url) {
            if (!isValidUrl(longurl)) {
                logEvent('error', 'Invalid URL Entered', { longurl });
                alert(`Invalid URL`);
                return;
            }
            const code = shortcode || genearteShortCode();
            results.push({ longurl, shortUrl: '$ {window.location.origin}/${code}',
                validity: validity || 30, 
                createdAt: new Date(),
                clicks: [] 
            });
            logEvent('info', 'Short URL created', { longurl, code });
        }
        onShorten(results);
    };
    return(
        <Box>
            {url.map((url, i) => (
                <Box key={i} sx={{ mb: 2 }}>
                    <TextField
                        label="Long URL"
                        fullWidth
                        onChange={(e) => handleChange(i, 'longurl', e.target.value)}
                    />
                    <TextField
                        label="Validity (minutes)"
                        type="number"
                        defaultValue={30}
                        onChange={(e) => handleChange(i, 'validity', e.target.value)}
                    />
                    <TextField
                        label="Custom Short URL"
                        onChange={(e) => handleChange(i, 'shortcode', e.target.value)}
                    />
                </Box>
            ))}
            <Button variant="contained" onClick={handleShorten}>Shorten url</Button>
        </Box>
    );
};
export default UrlShortenerForm;