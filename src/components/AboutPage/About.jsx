import React from 'react';
import img5 from '../../assets/muskan.jpg'
import img6 from '../../assets/Rajesh.jpg'
import img7 from '../../assets/Nisha.jpg'
import img8 from '../../assets/plant image.jpg'
import { Mail,ChevronDown } from 'lucide-react';

import { Eye, Rocket } from 'lucide-react';

import './About.css';

const About = () => {
    const statesData = [
    {
      name: 'Maharashtra',
      percentage: '30%',
      className: 'ovng-jarnatak-maharashtra'
    },
    {
      name: 'Madhya Pradesh',
      percentage: '25%',
      className: 'ovng-jarnatak-madhya-pradesh'
    },
    {
      name: 'Tamil Nadu',
      percentage: '25%',
      className: 'ovng-jarnatak-tamil-nadu'
    },
    {
      name: 'Telangana',
      percentage: '10%',
      className: 'ovng-jarnatak-telangana'
    },
    {
      name: 'Kerala',
      percentage: '5%',
      className: 'ovng-jarnatak-kerala'
    },
    {
      name: 'Karnataka',
      percentage: '5%',
      className: 'ovng-jarnatak-karnataka'
    }
  ];
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
        <h2 className="jan-samar-section-title">"Jan Samar" - "Movement for People"</h2>
        
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


<section className="our-stories-section">
  <div className="our-stories-section-wrapper">
    <div className="our-stories-section-container">
      <h2 className="our-stories-section-title">
        Our <span className="our-stories-foundation-text">Stories</span>
      </h2>
      
      <p className="our-stories-section-text">
The Jan Samar Foundation was established to confront urgent societal and environmental
challenges head-on. The founders, moved by the struggles of underprivileged children
lacking access to basic education and proper nutrition, as well as the alarming
degradation of our natural world, recognized the urgent need for a platform that
empowers individuals, uplifts communities, and safeguards our planet. 
      </p>
      
      <img 
        src={img8} 
        alt="Hands protecting a growing plant in soil" 
        className="our-stories-section-image"
      />
    </div>
    
    <div className="our-stories-section-button-container">
      <a href="#" className="our-stories-section-button">
        Join With Us
      </a>
    </div>
  </div>
</section>

    <section className="ovng-jarnatak-container">
      <div className="ovng-jarnatak-wrapper">
        <section className="ovng-jarnatak-header">
          <h1 className="ovng-jarnatak-title">
            Our <span className="ovng-jarnatak-growing">growing</span>
          </h1>
          <h1 className="ovng-jarnatak-title">Volunteer Network</h1>
        </section>

        <section className="ovng-jarnatak-network-container">
          {statesData.map((state) => (
            <div
              key={state.name}
              className={`ovng-jarnatak-state-circle ${state.className}`}
            >
              <div className="ovng-jarnatak-state-name">{state.name}</div>
              <div className="ovng-jarnatak-percentage">{state.percentage}</div>
            </div>
          ))}
        </section>
      </div>
    </section>


    </>
  );
};

export default About;
