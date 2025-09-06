import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom';
const RedirectHandler = ({ urls }) => {
    const { code } = useParams();
    useEffect(() => {
        const urlObj = urls.find((u) => u.shortUrl.endsWith(code));
        if (urlObj) {
           urlObj.clicks.push({ timestamp: new Date().toISOString(), referrer: document.referrer || "direct",
             location: "unknown", });
           window.location.href = urlObj.longurl;
        } else {
            alert('URL not found');
        }
    }, [code, urls]);
    return <div>Redirecting...</div>;
};
export default RedirectHandler;