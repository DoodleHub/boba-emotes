import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
