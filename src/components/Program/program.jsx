import React from "react";
import './program.css'
import Logo from "../../assets/Food-Donation-Improvement-Act-policy-food-waste-hunger-legislation.jpg";
import TreePlantingImage from "../../assets/tree-planting-image.png"; 
import SkillDevlopment from "../../assets/SkillDevlopment.png"; 

const Program = () => {
  return (
    <>
      {/* Header Section */}
      <div 
        className="container"
        style={{
          maxHeight: "50vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div 
          className="content"
          style={{
            textAlign: "center",
            padding: "40px 20px",
            width: "100%",
            maxWidth: "1200px"
          }}
        >
          <h1 
            className="title"
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#000000",
              lineHeight: "1.1",
            }}
          >
            Upcoming <span 
              style={{
                color: "#d17732ff",
              }}
            >Events</span>
          </h1>
          
          <p 
            className="description"
            style={{
              fontSize: "1.5rem",
              color: "#0d0d0dff",
              lineHeight: "1.6",
              fontWeight: "500",
              maxWidth: "1200px",
              letterSpacing: "1.6",
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
              padding: "0 10px"
            }}
          >
            We are coordinating inspiring events, impactful campaigns, and transformative programs 
            to create meaningful change in our community. Everyone has the chance to contribute 
            now, embracing the moment without regret for not having participated earlier.
          </p>
        </div>
      </div>

      <section className="event-section normal">
        <div className="event-image-section">
          <img src={Logo} alt="Food-Donation-Improvement-Act-policy-food-waste-hunger-legislation" className="event-image" />
        </div>
        
        <div className="event-content-section">
          <div className="event-card">
            <h1 className="event-title">Fill a plate, change a fate</h1>
            
            <p className="event-description">
              Every meal shared is a step towards hope, reminding us that in giving to those 
              in need, we nourish not just bodies, but also the spirit of community and 
              compassion
            </p>
            
            <div className="event-details">
              <div className="event-detail-item">
                <span className="event-detail-label">Place</span>
                <span className="event-detail-value">: Panvel municipal school no 5, Panvel, Maharashtra</span>
              </div>
              <div className="event-detail-item">
                <span className="event-detail-label">Orientation Date</span>
                <span className="event-detail-value">: 04 April 2025</span>
              </div>
              <div className="event-detail-item">
                <span className="event-detail-label">Timeline</span>
                <span className="event-detail-value">: 05 April 2025 & 06 April 2025</span>
              </div>
            </div>
                      <div className="event-buttons">
            <button className="button">Donate Now</button>
            <button className="button">Become a Volunteer</button>
          </div>
          </div>
          

        </div>
      </section>

      <section className="event-section reverse">
        <div className="event-image-section">
          <img src={TreePlantingImage} alt="Tree planting volunteer activity" className="event-image" />
        </div>
        
        <div className="event-content-section">
          <div className="event-card">
            <h1 className="event-title">Leave a greener footprint</h1>
            
            <p className="event-description">
              Planting a tree is not just an act of giving life to the earth, it's a commitment to a 
              greener future, where every seed sown nurtures hope and growth for generations to come
            </p>
            
            <div className="event-details">
              <div className="event-detail-item">
                <span className="event-detail-label">Place</span>
                <span className="event-detail-value">: Panvel municipal school no 5, Panvel, Maharashtra</span>
              </div>
              <div className="event-detail-item">
                <span className="event-detail-label">Orientation Date</span>
                <span className="event-detail-value">: 21 June 2025</span>
              </div>
              <div className="event-detail-item">
                <span className="event-detail-label">Timeline</span>
                <span className="event-detail-value">: Depending on monsoon rains</span>
              </div>
            </div>
                      <div className="event-buttons">
            <button className="button">Donate Now</button>
            <button className="button">Become a Volunteer</button>
          </div>
          </div>
          

        </div>
      </section>


      <section className="skill-development">
        <img src={SkillDevlopment} alt="SkillDev" />

      </section>
      
    </>
  );
};

export default Program;