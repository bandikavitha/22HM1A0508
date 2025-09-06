import React from "react";
import { Box, Typography, Link } from "@mui/material";  
const UrlList = ({ urls }) => (
    <Box>
        {urls.map((u, i) => (
            <Box key={i} sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: '2px', mb: 1 }}>
                <Typography>Original: {u.longurl}</Typography>
                <Typography>Shortened: <Link href={u.shortUrl}>{u.shortUrl}</Link></Typography>
                <Typography>Expires in: {u.validity} minutes</Typography>
            </Box>
        ))}
    </Box>
);
export default UrlList;