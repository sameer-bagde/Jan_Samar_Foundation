import { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from '../../assets/Jan-Samar-Foundation.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="body max-width">
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} className="logo" alt="Jan Samar Foundation Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-item" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/programs" className="nav-item" onClick={() => setIsMenuOpen(false)}>Programs</Link>
          <Link to="/get-involved" className="nav-item" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
          <Link to="/contact" className="nav-item" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <Link to="/donate" className="donate-button" onClick={() => setIsMenuOpen(false)}>Donate</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;