import react from 'react';
import Home from './Home';
import Error from './Error';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Link to="/Home">Home</Link> |
        <Link to="/About">About</Link> |
        <Link to="/Contact">Contact</Link> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='*' element={<Error/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
