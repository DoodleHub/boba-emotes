import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
