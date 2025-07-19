import { Link } from "react-router-dom";
import Logo from '../../assets/Jan-Samar-Foundation-2.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className="body max-width">
      <div className="foundation-footer">
        <div className="footer-container">
          <div className="content-section">
            <h1 className="main-title">Together We Can Make Difference</h1>
            <p className="description">
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
                <input 
                  type="email" 
                  placeholder="Enter your E-Mail Address"
                  className="email-input"
                  required
                />
                <button type="submit" className="submit-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <a href="#" className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon youtube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
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
                  <li><a href="#">Upcoming Events</a></li>
                  <li><a href="#">Ongoing Events</a></li>
                </ul>
              </div>
            </div>

            {/* Footer Section 3 - Quick Links */}
            <div className="column section-3">
              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/programs">Programs</Link></li>
                  <li><Link to="/get-involved">Get Involved</Link></li>
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
            <Link to="/terms">Terms & Conditions</Link>
            <span className="divider">|</span>
            <Link to="/privacy">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/refund">Return & Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;