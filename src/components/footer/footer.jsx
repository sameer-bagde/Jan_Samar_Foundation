import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/Jan-Samar-Foundation-2.png';
import './footer.css';

const Footer = () => {
  const location = useLocation();

  // Function to handle link clicks and scroll to top
  const handleLinkClick = (targetPath) => {
    // Always scroll to top, regardless of whether it's the same path or not
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Fallbacks
      window.scrollTo(0, 0);
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // If clicking on the same path, scroll immediately
    if (location.pathname === targetPath) {
      scrollToTop();
    }
    // For different paths, ScrollToTop component will handle it
  };

  return (
    <footer className="body max-width">
      <div className="foundation-footer">
        <div className="footer-container">
          <div className="content-section">
            <h1 className="main-title">Together We Can Make Difference</h1>
            <p className="footer-description">
              Jan Samar Foundation is a non-profitable trust 
              is an organization established to serve charitable, 
              educational, or social purposes without 
              generating financial profit.
            </p>
          </div>
          
          <div className="subscribe-section">
            <h2 className="subscribe-title">Subscribe Us</h2>
            <form className="subscribe-form">
              <div className="input-container">
                <div className="footer-email-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <input 
                  type="email" 
                  placeholder="Enter your E-Mail Address"
                  className="footer-email-input"
                  required
                />
                <button type="submit" className="submit-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="footer-line"></div>

        <div className="footer-content">
          <div className="row">
            <div className="column section-1">
              <div className="footer-section">
                <img src={Logo} alt="Jan Samar Foundation" className="footer-logo" />
                <div className="social-container">
                  <p className="follow-text">follow us on</p>
                  <div className="social-bar">
                    <a href="#" className="social-icon facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon x">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#" className="social-icon youtube">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" className="social-icon instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Section 2 - Events */}
            <div className="column section-2">
              <div className="footer-section">
                <h3>Events</h3>
                <ul>
                  <li>
                    <Link 
                      to="/upcoming-events" 
                      onClick={() => handleLinkClick("/upcoming-events")}
                    >
                      Upcoming Events
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/ongoing-events" 
                      onClick={() => handleLinkClick("/ongoing-events")}
                    >
                      Ongoing Events
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Section 3 - Quick Links */}
            <div className="column section-3">
              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link 
                      to="/" 
                      onClick={() => handleLinkClick("/")}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      onClick={() => handleLinkClick("/about")}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/programs" 
                      onClick={() => handleLinkClick("/programs")}
                    >
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/get-involved" 
                      onClick={() => handleLinkClick("/get-involved")}
                    >
                      Get Involved
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact-us" 
                      onClick={() => handleLinkClick("/contact-us")}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Section 4 - Contact Us */}
            <div className="column section-4">
              <div className="footer-section">
                <h3>Contact Us</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <span>Email: info@jansamar.org</span>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <span>Phone: +1 234 567 8900</span>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <span>Address: 123 Foundation St.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div>Copyrights © 2024 All Rights reserved Jan Samar Foundation</div>
          <div className="footer-links">
            <Link 
              to="/terms" 
              onClick={() => handleLinkClick("/terms")}
            >
              Terms & Conditions
            </Link>
            <span className="divider">|</span>
            <Link 
              to="/privacy" 
              onClick={() => handleLinkClick("/privacy")}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;