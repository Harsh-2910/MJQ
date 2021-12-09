import React from 'react';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Quotes from './components/Quotes/Quotes';
import Jokes from './components/Jokes/Jokes';
import LandingPage from './components/Landing Page/LandingPage';
import { Memes } from './components/Memes/Memes';
import { MemesGenerated } from './components/Memes/MemesGenerated/MemesGenerated';
import './App.css';

const App = () => {
  return (
    <Router>
       <div>
        <Routes>
         <Route exact path="/" element={<LandingPage />}/>
         <Route exact path="/quotes" element={<Quotes />}/>
         <Route exact path="/memes" element={<Memes />}/>
         <Route exact path="/jokes" element={<Jokes />}/>
         <Route exact path="/memes/generated" element={<MemesGenerated/>} />
        </Routes>
       </div>
    </Router>
  );
}

export default App

