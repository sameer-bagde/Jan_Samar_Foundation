// Card.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Card.css';
import Logo from '../../assets/image1.jpg';

const Card = () => {
  return (
      <div className="grid-container">
        <div className="card">
          <div className="card-content">
            <img src={Logo} alt="Educational Campaign" className="campaign-image" />
            <div className="overlay-content">
              <div className="text-content">
                <h3>Educational Campaign</h3>
                <div className="location">
                  <FontAwesomeIcon icon={faLocationDot} style={{ color: '#e17014' }} />
                  <span> Panvel, Maharashtra</span>
                </div>
              </div>
              <div className="date-badge">
                <span className="month">Month</span>
                <span className="year">2024</span>
              </div>
            </div>
          </div>
          <hr style={{ border: '1px solid #e17014', width: '100%' }} />
          <div className="arrow-down"></div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-content">
            <img src={Logo} alt="Educational Campaign" className="campaign-image" />
            <div className="overlay-content">
              <div className="text-content">
                <h3>Plantation Drive</h3>
                <div className="location">
                  <FontAwesomeIcon icon={faLocationDot} style={{ color: '#e17014' }} />
                  <span> Panvel, Maharashtra</span>
                </div>
              </div>
              <div className="date-badge">
                <span className="month">Month</span>
                <span className="year">2024</span>
              </div>
            </div>
          </div>
          <hr style={{ border: '1px solid #e17014', width: '100%' }} />
          <div className="arrow-down"></div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-content">
            <img src={Logo} alt="Educational Campaign" className="campaign-image" />
            <div className="overlay-content">
              <div className="text-content">
                <h3>Food Distribution</h3>
                <div className="location">
                  <FontAwesomeIcon icon={faLocationDot} style={{ color: '#e17014' }} />
                  <span> Panvel, Maharashtra</span>
                </div>
              </div>
              <div className="date-badge">
                <span className="month">Month</span>
                <span className="year">2024</span>
              </div>
            </div>
          </div>
          <hr style={{ border: '1px solid #e19014', width: '100%' }} />
          <div className="arrow-down"></div>
        </div>
      </div>
  );
};

export default Card;