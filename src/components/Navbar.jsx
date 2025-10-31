import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          WhiteOut
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-links" onClick={toggleMenu}>
              <span>Home</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/faq" className="navbar-links" onClick={toggleMenu}>
              <span>FAQ</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/privacy-statement" className="navbar-links" onClick={toggleMenu}>
              <span>Privacy Statement</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
