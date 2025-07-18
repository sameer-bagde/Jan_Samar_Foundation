import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FaSeedling, FaGraduationCap, FaNotesMedical } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import './Content.css';
import img1 from '../../assets/PHOTO-2024-12-03-19-08-49 6-images-0.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/PHOTO-2024-12-03-19-08-49 3_page-0003.jpg';
import img5 from '../../assets/muskan.jpg'
import img6 from '../../assets/Rajesh.jpg'
import img7 from '../../assets/Nisha.jpg'

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
            {/* Use loading="lazy" for mages that are below the fold */}
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

<section className="ourteam-section">
    <div className="ourteam-container">
        <div className="ourteam-heading">
            <h1 className="first">Our Team</h1>
            <div className="subtitle">
                <span className="highlight">Meet</span> the Passionate Mind Behind
                <br />
                <span>uplift</span>
            </div>
        </div>

        <div className="team-grid">
            <div className="team-card">
                <div className="card-image">
                    <img
                        className="container2"
                        src={img5}
                        alt="Children smiling with volunteer"
                        loading="lazy"
                    />
                </div>
                <div className="email-btn">
                    <Mail size={20} strokeWidth={2} />
                </div>
                <div className="card-content">
                    <p className="member-role">President Of Jan Samar Foundation</p>
                    <h3 className="member-name">Muskaan Goel</h3>
                    <div className="card-divider"></div>
                </div>
            </div>

            <div className="team-card">
                <div className="card-image">
                    <img
                        className="container2"
                        src={img6}
                        alt="Children smiling with volunteer"
                        loading="lazy"
                    />
                </div>
                <div className="email-btn">
                    <Mail size={20} strokeWidth={2} />
                </div>
                <div className="card-content">
                    <p className="member-role">Co-Founder Of Jan Samar Foundation</p>
                    <h3 className="member-name">Rajesh Goel</h3>
                    <div className="card-divider"></div>
                </div>
            </div>

            <div className="team-card">
                <div className="card-image">
                    <img
                        className="container2"
                        src={img7}
                        alt="Children smiling with volunteer"
                        loading="lazy"
                    />
                </div>
                <div className="email-btn">
                    <Mail size={20} strokeWidth={2} />
                </div>
                <div className="card-content">
                    <p className="member-role">Treasurer Of Jan Samar Foundation</p>
                    <h3 className="member-name">Nisha Goel</h3>
                    <div className="card-divider"></div>
                </div>
            </div>
        </div>
    </div>
</section>


    <section className="Contributors-section">
      <div className="Contributors-container">
        <div className="Contributors-heading">
          <h1 className="first">Hear From Our Contributors</h1>
        </div>
        
        <div className="Contributors-grid">
          <div className="contributor-card">
            <div className="contributor-card-content">
              <p className="testimonial">I had the opportunity to meet and support all the individuals involved. The time I spent with those kids filled me with joy beyond measure.</p>
              <div className="contributor-info">
                <div className="contributor-avatar">
                  <img src={img4} alt="Mukesh" />
                </div>
                <div className="contributor-details">
                  <h3 className="contributor-name">
                    Mukesh <span className="location">,Mumbai</span>
                  </h3>
                  <p className="contributor-state">Maharashtra</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contributor-card">
            <div className="contributor-card-content">
              <p className="testimonial">I had the opportunity to meet and support all the individuals involved. The time I spent with those kids filled me with joy beyond measure.</p>
              <div className="contributor-info">
                <div className="contributor-avatar">
                  <img src={img4} alt="Sandeep" />
                </div>
                <div className="contributor-details">
                  <h3 className="contributor-name">
                    Sandeep <span className="location">,Kochi</span>
                  </h3>
                  <p className="contributor-state">Kerala</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contributor-card">
            <div className="contributor-card-content">
              <p className="testimonial">I had the opportunity to meet and support all the individuals involved. The time I spent with those kids filled me with joy beyond measure.</p>
              <div className="contributor-info">
                <div className="contributor-avatar">
                  <img src={img4} alt="Ranjith Reddy" />
                </div>
                <div className="contributor-details">
                  <h3 className="contributor-name">
                    Ranjith Reddy <span className="location">,Hyderabad</span>
                  </h3>
                  <p className="contributor-state">Telangana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contributor-card">
            <div className="contributor-card-content">
              <p className="testimonial">I had the opportunity to meet and support all the individuals involved. The time I spent with those kids filled me with joy beyond measure.</p>
              <div className="contributor-info">
                <div className="contributor-avatar">
                  <img src={img4} alt="Pallavi" />
                </div>
                <div className="contributor-details">
                  <h3 className="contributor-name">
                    Pallavi <span className="location">,Pallakad</span>
                  </h3>
                  <p className="contributor-state">Kerala</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contributor-card">
            <div className="contributor-card-content">
              <p className="testimonial">I had the opportunity to meet and support all the individuals involved. The time I spent with those kids filled me with joy beyond measure.</p>
              <div className="contributor-info">
                <div className="contributor-avatar">
                  <img src={img4} alt="Harsha" />
                </div>
                <div className="contributor-details">
                  <h3 className="contributor-name">
                    Harsha <span className="location">,Chennai</span>
                  </h3>
                  <p className="contributor-state">Tamilnadu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contributor-card">
            <div className="contributor-card-content">
              <p className="testimonial">I had the opportunity to meet and support all the individuals involved. The time I spent with those kids filled me with joy beyond measure.</p>
              <div className="contributor-info">
                <div className="contributor-avatar">
                  <img src={img4} alt="Varun" />
                </div>
                <div className="contributor-details">
                  <h3 className="contributor-name">
                    Varun <span className="location">,Chennai</span>
                  </h3>
                  <p className="contributor-state">Tamilnadu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pagination-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>



    <section class="upcoming-events-section">
        <div class="upcoming-events-container">
                <div class="upcoming-events-heading">
                    <h1 class="first">Upcoming Events</h1>
                </div>
                <button class="view-all-btn">View All</button>
            
            <div class="upcoming-events-grid">
                <div class="upcoming-events-card">
                    <div class="upcoming-events-image">
                        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80" alt="Education Campaign" loading="lazy" />
                        <div class="event-overlay">
                            <h3 class="event-title">Education Campaign</h3>
                            <button class="join-button">Join With Us</button>
                        </div>
                    </div>
                </div>
                
                <div class="upcoming-events-card">
                    <div class="upcoming-events-image">
                        <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Plantation Drive" loading="lazy" />
                        <div class="event-overlay">
                            <h3 class="event-title">Plantation Drive</h3>
                            <button class="join-button">Join With Us</button>
                        </div>
                    </div>
                </div>
                
                <div class="upcoming-events-card">
                    <div class="upcoming-events-image">
                        <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Food Distributions" loading="lazy" />
                        <div class="event-overlay">
                            <h3 class="event-title">Food Distributions</h3>
                            <button class="join-button">Join With Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="donate-now-section">
        <div class="donate-now-container">
            <header class="donate-now-section-header">
                <h1>Let us unite to elevate our community<br />and the world around us</h1>
                <p>Sometimes it feels like our efforts are just a small drop in the vast ocean but the ocean would be a little less without that drop. Every contribution matters, no matter how small, and together, we shape the present into a future we can all take pride in.</p>
                <button class="donate-now-btn">Donate Now</button>
            </header>
        </div>
        <div className="donate-grid-container">
          <div className="donate-grid-item" id="be-reason">
            <div>Be The Reason<br />a Child<br />Smile</div>
          </div>
          
          <div className="donate-grid-item" id="volunteer-count">
            <div>Join our community</div>
          </div>
          
          <div className="donate-grid-item" id="volunteers-working">
            <div className="large-number">200+</div>
            <div className="medium-text">Volunteers Working<br />With Us</div>
          </div>
          
          <div className="donate-grid-item" id="join-foundation">
            <div>Join With Us<br />In the Jan Samar<br />Foundation</div>
            <button className="join-us-btn">Join Us</button>
          </div>
          
          <div className="donate-grid-item" id="inspire-change">
            <div>Inspire Change,<br />Inspire Education</div>
          </div>
          
          <div className="donate-grid-item" id="plant-everywhere">
            <div>Plant<br />Everywhere</div>
          </div>
          
          <div className="donate-grid-item" id="donate-header">
            <div>Support Our<br />Mission</div>
          </div>
        </div>
    </section>


  </>

  );
};

export default Content;
