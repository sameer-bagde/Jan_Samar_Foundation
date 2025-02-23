import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faDonate, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

import Logo from '../../assets/image1.jpg';

const V_DCard = () => {
  return (
    <section className="v-d-section">
      <div className="card-grid">
      <div className="v-d-card">
      <div className="image-wrapper">
            <img src={Logo} alt="Green initiative" className="card-img" />
            <div className="image-title">
              <h3 className="title-text">Leave a green footprint for future generations</h3>
            </div>
          </div>
                    <div className="progress-section">
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '50%' }} />
                <div className="progress-amount">₹100000</div>
                <FontAwesomeIcon icon={faCaretDown} className="progress-caret" />
              </div>
            </div>
            <div class="fund-container">
    <div class="fund-info1">Raised fund</div>
    <div class="fund-info2">Target fund</div>
</div>
          </div>

          <div className="card-description">
            <p>Create a sustainable and environmentally friendly legacy that ensures a healthy and vibrant place for future generations to thrive in.</p>
          </div>
          <div className='hr'>
          </div>

          <div className="button-container">
  <button className="action-btn">
    <div className="inner-btn">
      <FontAwesomeIcon icon={faHandshake} className="btn-icon" />
      Volunteer
    </div>
  </button>
  <button className="action-btn">
    <div className="inner-btn">
      <FontAwesomeIcon icon={faDonate} className="btn-icon" />
      Donate
    </div>
  </button>
</div>

        </div>

        <div className="v-d-card">
        <div className="image-wrapper">
            <img src={Logo} alt="Green initiative" className="card-img" />
            <div className="image-title">
              <h3 className="title-text">Leave a green footprint for future generations</h3>
            </div>
          </div>          <div className="progress-section">
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '50%' }} />
                <div className="progress-amount">₹100000</div>
                <FontAwesomeIcon icon={faCaretDown} className="progress-caret" />
              </div>
            </div>
            <div class="fund-container">
    <div class="fund-info1">Raised fund</div>
    <div class="fund-info2">Target fund</div>
</div>
          </div>

          <div className="card-description">
            <p>Create a sustainable and environmentally friendly legacy that ensures a healthy and vibrant place for future generations to thrive in.</p>
          </div>
          <div className='hr'>
          </div>

          <div className="button-container">
  <button className="action-btn">
    <div className="inner-btn">
      <FontAwesomeIcon icon={faHandshake} className="btn-icon" />
      Volunteer
    </div>
  </button>
  <button className="action-btn">
    <div className="inner-btn">
      <FontAwesomeIcon icon={faDonate} className="btn-icon" />
      Donate
    </div>
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default V_DCard;