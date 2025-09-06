import React from "react";
import { Box, Typography } from "@mui/material";
const StatsPage = ({ url }) => (
        <Box>
            <Typography variant="h5">URL Shortened URL Statistics</Typography>
            {url.map((u, i) => (
                <Box key={i} sx={{ p: 2, border: '1px solid #aaa', mb: 1 }}>
                    <Typography>Short URL: {u.shortUrl}</Typography>
                    <Typography>Total Clicks: {u.Clicks.length}</Typography>
                    <ul>
                        {u.clicks.map((c, idx) => (
                            <li key={idx}>
                                {c.timestamp} - {c.referrer } - {c.location}
                            </li>
                        ))}
                    </ul>
                </Box>
            ))}
        </Box>
    );
export default StatsPage;