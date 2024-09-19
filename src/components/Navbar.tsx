import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold uppercase">
        Boba Emotes
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/about"
            className="bg-pink-400 text-white py-2 px-4 rounded-lg hover:bg-pink-500 transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            className="bg-pink-400 text-white py-2 px-4 rounded-lg hover:bg-pink-500 transition"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/privacy-policy"
            className="bg-pink-400 text-white py-2 px-4 rounded-lg hover:bg-pink-500 transition"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
