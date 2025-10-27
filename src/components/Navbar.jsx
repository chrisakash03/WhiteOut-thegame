import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          WhiteOut
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-links">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/faq" className="navbar-links">
              FAQ
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/privacy-statement" className="navbar-links">
              Privacy Statement
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
