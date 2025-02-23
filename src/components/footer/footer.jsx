import { Link } from "react-router-dom";
import Logo from '../../assets/Jan-Samar-Foundation.png';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <img src={Logo} alt="Jan Samar Foundation" className="footer-logo" />
          <p>follow us on</p>
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

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@jansamar.org</li>
            <li>Phone: +1 234 567 8900</li>
            <li>Address: 123 Foundation St.</li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
      </div>

      <div className=" footer-bottom">
        <div className="footer-bottom-content">
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/refund">Return & Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;