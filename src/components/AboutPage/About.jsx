import React from 'react';
import img5 from '../../assets/muskan.jpg'
import img6 from '../../assets/Rajesh.jpg'
import img7 from '../../assets/Nisha.jpg'
import { Mail,ChevronDown } from 'lucide-react';


import { Eye, Rocket } from 'lucide-react';

import './About.css';

const About = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="title">
            About <span className="highlight1">Jan Samar</span>
          </h1>

          <p className="description">
            We are dedicated to transforming the lives of underprivileged children by providing impactful education tailored to their unique needs and ensuring access to essential nourishment that fosters their growth and development. We passionately promote a sustainable and pollution-free environment, recognizing our responsibility to protect the planet for future generations.
          </p>

          <div className="buttons">
            <button className="btn">Donate Now</button>
            <button className="btn">Volunteer Now</button>
          </div>
        </div>
      </div>

          <section className="jan-samar-section">
        <h2 className="section-title">"Jan Samar" - "Movement for People"</h2>
        
        <div className="vision-mission-container">
          <div className="vision-card">
            <div className="icon-container">
              <Eye className="card-icon" size={40} />
            </div>
            <h3 className="card-title">Vision</h3>
            <p className="card-description">
              Establish self-sustaining communities by seamlessly integrating education, skill 
              development, and environmental preservation. By collaborating with both global 
              and local entities, we will amplify our efforts and maximize our resources for greater 
              impact.
            </p>
          </div>

          <div className="mission-card">
            <div className="icon-container">
              <Rocket className="card-icon" size={40} />
            </div>
            <h3 className="card-title">Mission</h3>
            <p className="card-description">
              To improve the lives of underprivileged children through education and nourishment 
              while fostering a sustainable and pollution-free environment. We strive to create 
              opportunities for growth, learning, and community engagement, ensuring a better 
              future for all.
            </p>
          </div>
        </div>
    </section>
<section className="pilliar-section">
    <div className="pilliar-container">
        <div className="pilliar-heading">
            <h1 className="first">Pillar Of <span className="foundation-text">Jan Samar Foundation</span></h1>
        </div>

        <div className="pilliar-team-grid">
            <div className="pilliar-member">
                <div className="pilliar-profile-image">
                    <img
                        src={img5}
                        alt="Muskaan Goel"
                        loading="lazy"
                    />
                </div>
                <div className="pilliar-member-card">
                    <h3 className="pilliar-member-name">Muskaan Goel</h3>
                    <p className="pilliar-member-role">President Of Jan Samar Foundation</p>
                    <div className="pilliar-dropdown-btn">
                        <ChevronDown size={20} strokeWidth={2} />
                    </div>
                </div>
            </div>

            <div className="pilliar-member">
                <div className="pilliar-profile-image">
                    <img
                        src={img6}
                        alt="Rajesh Goel"
                        loading="lazy"
                    />
                </div>
                <div className="pilliar-member-card">
                    <h3 className="pilliar-member-name">Rajesh Goel</h3>
                    <p className="pilliar-member-role">Co-Founder Of Jan Samar Foundation</p>
                    <div className="pilliar-dropdown-btn">
                        <ChevronDown size={20} strokeWidth={2} />
                    </div>
                </div>
            </div>

            <div className="pilliar-member">
                <div className="pilliar-profile-image">
                    <img
                        src={img7}
                        alt="Nisha Goel"
                        loading="lazy"
                    />
                </div>
                <div className="pilliar-member-card">
                    <h3 className="pilliar-member-name">Nisha Goel</h3>
                    <p className="pilliar-member-role">Treasurer Of Jan Samar Foundation</p>
                    <div className="pilliar-dropdown-btn">
                        <ChevronDown size={20} strokeWidth={2} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  );
};

export default About;
