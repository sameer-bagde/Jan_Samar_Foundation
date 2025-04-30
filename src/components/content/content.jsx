import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FaSeedling, FaGraduationCap, FaNotesMedical } from 'react-icons/fa';
import './Content.css';
import img1 from '../../assets/PHOTO-2024-12-03-19-08-49 6-images-0.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/PHOTO-2024-12-03-19-08-49 3_page-0003.jpg';


const Content = () => {
  return (

  <>
    <section className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-header">
          <h1 className="welcome-title">
            Welcome to Jan Samar Foundation! Non-Profit<br />& Charity Organization
          </h1>
          <p className="welcome-description">
            Jan Samar Foundation is a non-profit charity dedicated to [cause/mission], providing [specific services or
            support] to empower and uplift [target beneficiaries]. Together, we strive to create a lasting positive
            impact and build a better future.
          </p>
        </div>

        <div className="programs-container">
          <div className="program-card">
            <div className="program-icon food-icon">
              <MdOutlineRestaurantMenu size={32} />
            </div>
            <h3 className="program-title">Food Distribution</h3>
            <p className="program-description">
            Food distribution for poor people ensures

access to nutritious meals, combating hunger

and malnutrition. It fosters community support,

promotes dignity, and addresses inequalities,

providing essential aid to those in need.            </p>
          </div>

          <div className="program-card">
            <div className="program-icon plantation-icon">
              <FaSeedling size={32} />
            </div>
            <h3 className="program-title">Plantation Drive</h3>
            <p className="program-description">
            A plantation drive is an organized effort
to plant trees, promoting environmental
conservation, enhancing greenery,
reducing carbon footprints, and raising
awareness about the importance of
sustainable living.            </p>
          </div>

          <div className="program-card">
            <div className="program-icon education-icon">
              <FaGraduationCap size={32} />
            </div>
            <h3 className="program-title">Educational Campaign</h3>
            <p className="program-description">
            An educational campaign is a strategic
initiative designed to raise awareness,
inform, and educate a target audience
on specific topics, fostering
understanding, behavior change, or skill
development.            </p>
          </div>

          <div className="program-card">
            <div className="program-icon medical-icon">
              <FaNotesMedical size={32} />
            </div>
            <h3 className="program-title">Medical Checkups</h3>
            <p className="program-description">
            Free medical checkups offer essential
health screenings, promoting early
detection and prevention of diseases,
ensuring individuals access basic
healthcare services without cost,
improving overall community health and
well-being.         </p>
          </div>
        </div>
      </div>
    </section>

    <section
      className="impact-section"

    >
      <div className="impact-content">
        <h2 className="impact-heading">Our Impacts</h2>
        
        <div className="impact-grid">
          <div className="impact-item">
            <span className="impact-number">2000+</span>
            <span className="impact-label">Peoples</span>
          </div>
          
          <div className="impact-item">
            <span className="impact-number">30+</span>
            <span className="impact-label">Villages</span>
          </div>
          
          <div className="impact-item">
            <span className="impact-number">15+</span>
            <span className="impact-label">Campaigns</span>
          </div>
          
          <div className="impact-item">
            <span className="impact-number">1</span>
            <span className="impact-label">State</span>
          </div>
        </div>
      </div>
    </section>

    <section className="stories-section">
      <div className="stories-container">
        <div className="stories-heading">
          <h1>Stories In Emotion</h1>
        </div>
        
        <div className="stories-content">
          <div className="stories-image-grid">
            {/* Use loading="lazy" for images that are below the fold */}
            <div className="stories-image">
              <img 
                className="container1" 
                src={img1} 
                alt="Classroom with underprivileged children learning" 
                loading="lazy"
              />
            </div>
            <div className="stories-image">
              <img 
                className="container2" 
                src={img2} 
                alt="Children smiling with volunteer" 
                loading="lazy"
              />
            </div>
            <div className="stories-image">
              <img 
                className="container3" 
                src={img3} 
                alt="Food preparation for children" 
                loading="lazy"
              />
            </div>
            <div className="stories-image" style={{ gridColumn: "2", gridRow: "2" }}>
              <img 
                className="container4" 
                src={img4} 
                alt="Environmental activity with volunteers" 
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="stories-text">
            <p>
              We are dedicated to transforming the lives of underprivileged 
              children by providing impactful education tailored to their 
              unique needs and ensuring access to essential nourishment that 
              fosters their growth and development. We passionately promote 
              a sustainable and pollution-free environment, recognizing our 
              responsibility to protect the planet for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>

  );
};

export default Content;
