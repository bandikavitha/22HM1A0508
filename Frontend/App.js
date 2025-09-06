import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import UrlShortenerForm from './components/UrlShortenerForm';
import UrlList from './components/UrlList';
import StatsPage from './components/StatsPage';
import RedirectHandler from './components/RedirectHandler';
import { Container, Button } from '@mui/material';
function App() {
  const [urls, setUrls] = useState([]);

  return (
    <Router>
      <Container>
        <h1>React URL Shortener</h1>
        <nav>
          <link to ="/"><Button>Shortener</Button></link>
          <link to ="/ stats"><Button>Statistics</Button></link>
        </nav>
        <Routes>
          <Route path="/" element={<><UrlShortenerForm onShorten={(newUrls) => setUrls([...urlnewUrls])} /><UrlList urls={urls}/>
           </>
          } />
         <Route path="/stats" element={<StatsPage urls={urls} />} />
          <Route path="/:code" element={<RedirectHandler urls={urls} />} />
        </Routes>
      </Container>
    </Router>

  );
}

export default App;
