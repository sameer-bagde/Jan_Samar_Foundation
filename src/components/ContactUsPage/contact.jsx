import React from "react";
import Imgcontact from  '../../assets/Contact Us.jpg'
import './contact.css';

const Contact = () => {

    return (
        <>
    <section className="contact-section">
      <div className="contact-left-section">
        <img src={Imgcontact} alt="Imgcontact" className="contact-left-image"/>
      </div>
      <div className="contact-right-section">
        <div className="contact-card">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">You can reach us anytime</p>
          
          <form className="contact-form">
            <div className="form-row">
              <input 
                type="text" 
                placeholder="First Name" 
                className="form-input half-width"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="form-input half-width"
              />
            </div>
            
            <div className="form-group">
              <div className="email-input-wrapper">
                <span className="email-icon">✉</span>
                <input 
                  type="email" 
                  placeholder="Enter your mail ID" 
                  className="form-input email-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <div className="phone-input-wrapper">
                <select className="country-code">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input 
                  type="tel" 
                  placeholder="Enter your Mobile Number" 
                  className="form-input phone-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <textarea 
                placeholder="How can we help ?" 
                className="form-textarea"
                rows="4"
              ></textarea>
              <div className="char-count">0 / 1000</div>
            </div>
            
            <button type="submit" className="submit-from-btn ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>

    <section className="location-section">
      <div className="location-left-section">
        <div className="map-container">
          <div className="map-wrapper">
            <div id="embed-ded-map-canvas" className="map-canvas">
              <iframe
                className="map-iframe"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Godrej+Sky+Garden&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                title="Godrej Sky Garden Location"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="location-right-section">
        <div className="content-wrapper">
          <h5 className="contact-subtitle">Our Location</h5>
          <h2 className="contact-title">Connecting Near and Far</h2>
          <div className="office-details">
            <h3 className="office-heading">Head - Office</h3>
            <div className="office-info">
              <p className="organization-name">Jan Samar Foundation</p>
              <p className="address">
                Godrej Sky Garden, Takka, Panvel,<br />
                Maharashtra-410206
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="FAQ-section">
  <div className="faq-content-overlay">
    <div className="faq-header">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <p className="faq-subtitle">
        Everything you need to know about Jan Samar Foundation. Can't find the answer you're 
        looking for? Feel free to <a href="contact-us" className="highlight">Contact Us</a>.
      </p>
    </div>
    
    <div className="faq-items-container">
      <div className="faq-item">
        <div className="faq-question">
          <span>To improve the lives of underprivileged children</span>
          <button className="faq-toggle">+</button>
        </div>
      </div>
      
      <div className="faq-item">
        <div className="faq-question">
          <span>To improve the lives of underprivileged children</span>
          <button className="faq-toggle">+</button>
        </div>
      </div>
      
      <div className="faq-item">
        <div className="faq-question">
          <span>To improve the lives of underprivileged children</span>
          <button className="faq-toggle">+</button>
        </div>
      </div>
      
      <div className="faq-item">
        <div className="faq-question">
          <span>To improve the lives of underprivileged children</span>
          <button className="faq-toggle">+</button>
        </div>
      </div>
      
      <div className="faq-item">
        <div className="faq-question">
          <span>To improve the lives of underprivileged children</span>
          <button className="faq-toggle">+</button>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    )
}
export default Contact;