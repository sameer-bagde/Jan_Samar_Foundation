import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from '../../assets/Jan-Samar-Foundation.png';
import Logo2 from '../../assets/Jan-Samar-Foundation-2.png';

import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isAboutPage = location.pathname === '/about';
  const isGetInvolvedPage = location.pathname === '/get-involved';
  
  // Determine which styling to use
  const getHeaderClass = () => {
    if (isAboutPage) return 'header-no-bg';
    if (isGetInvolvedPage) return 'header-get-involved';
    return '';
  };
  
  const getLogoSrc = () => {
    if (isAboutPage || isGetInvolvedPage) return Logo2;
    return Logo;
  };
  
  const getLogoClass = () => {
    if (isAboutPage) return 'logo-no-bg';
    if (isGetInvolvedPage) return 'logo-get-involved';
    return 'logo';
  };
  
  const getNavItemClass = () => {
    if (isAboutPage) return 'nav-item-no-bg';
    if (isGetInvolvedPage) return 'nav-item-get-involved';
    return 'nav-item';
  };

  return (
    <div className="body max-width">
      <header className={`header ${getHeaderClass()}`}>
        <div className="navbar">
          <div className="logo-container">
            <Link to="/">
              <img
                src={getLogoSrc()}
                className={getLogoClass()}
                alt="Jan Samar Foundation Logo"
              />
            </Link>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </div>

          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={getNavItemClass()} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className={getNavItemClass()} onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/programs" className={getNavItemClass()} onClick={() => setIsMenuOpen(false)}>
              Programs
            </Link>
            <Link to="/get-involved" className={getNavItemClass()} onClick={() => setIsMenuOpen(false)}>
              Get Involved
            </Link>
            <Link to="/contact" className={getNavItemClass()} onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
            <Link to="/donate" className="donate-button" onClick={() => setIsMenuOpen(false)}>
              Donate Now
            </Link>
          </nav>
        </div>

        {!isAboutPage && !isGetInvolvedPage && (
          <div className="header-content">
            <h1 className="header-title">
              <span className="header-title-small">Small</span>
              <span> </span>
              <span className="header-title-script">Efforts</span><br />
              <span className="header-title-make">Make Big Changes</span>
            </h1>
            <p className="header-subtitle">
              we are ready for provide better service to make the world happy
            </p>
            <div className="header-buttons">
              <button className="header-volunteer-button">Become a Volunteer</button>
              <button className="header-donate-button">Donate Now</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;