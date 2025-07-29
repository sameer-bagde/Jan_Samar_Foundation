import React, { useState, useEffect } from "react";

import { Settings, Store, Monitor, Sparkles, Target, Users, Heart, Unlock } from 'lucide-react';

import './program.css'
import Logo from "../../assets/Food-Donation-Improvement-Act-policy-food-waste-hunger-legislation.jpg";
import TreePlantingImage from "../../assets/tree-planting-image.png"; 
import SkillDevlopment from "../../assets/SkillDevlopment.png"; 
import SkillIllustration from "../../assets/SkillIllustration.png"; 
import AcRepair from "../../assets/AcRepair.webp"; 
import GirlPurchase from "../../assets/GirlPurchase.jpg"; 
import GirlComputer from "../../assets/GirlComputer.png"; 
import EducationCampaign from "../../assets/EducationCampaign.png"; 

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";
import img4 from '../../assets/image3.jpg';


const Program = () => {

const images = [
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
  
  'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop',
  
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
  
  'https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&h=600&fit=crop',
  
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Get previous image index
  const getPreviousIndex = () => {
    return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  };

  // Get next image index  
  const getNextIndex = () => {
    return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  };


  const courses = [
    {
      id: 1,
      title: "AC & Refrigerator Servicing",
      icon: <Settings size={48} />,
    },
    {
      id: 2,
      title: "Boutique Management",
      icon: <Store size={48} />,
    },
    {
      id: 3,
      title: "Basic Computer Skills",
      icon: <Monitor size={48} />,
    },
    {
      id: 4,
      title: "Beauty & Wellness",
      icon: <Sparkles size={48} />,
    }
  ];

  const programIntents = [
    {
      id: 1,
      icon: <Target size={24} />,
      text: "To empower underprivileged youth, especially women, that paves the way for a path to financial independence."
    },
    {
      id: 2,
      icon: <Users size={24} />,
      text: "Improving the financial situation of an underserved community."
    },
    {
      id: 3,
      icon: <Heart size={24} />,
      text: "Cultivating self-confidence and embracing self-realization."
    },
    {
      id: 4,
      icon: <Unlock size={24} />,
      text: "Unlock the essential skills that are within reach for everyone, regardless of their ability to pay."
    }
  ];

  const programImages = [
    {
      id: 1,
      src: AcRepair,
      alt: "AC and Refrigerator Repair Training - Technician working on HVAC unit"
    },
    {
      id: 2,
      src: GirlComputer,
      alt: "Computer Skills Training - People learning computer skills in classroom"
    },
    {
      id: 3,
      src: GirlPurchase,
      alt: "Boutique Management Training - Customer service and retail skills"
    },
  ];

  return (
    <>
<div
  className="container"
  style={{
    maxHeight: "70vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  }}
>
  <div
    className="content"
    style={{
      textAlign: "center",
      padding: "40px 20px",
      width: "100%",
      maxWidth: "1200px",
    }}
  >
    <h1
      className="title"
      style={{
        fontSize: "clamp(2rem, 5vw, 3.5rem)", // Responsive font size
        fontWeight: "bold",
        color: "#000000",
        lineHeight: "1.2",
      }}
    >
      Upcoming{" "}
      <span
        style={{
          color: "#d17732ff",
        }}
      >
        Events
      </span>
    </h1>

    <p
      className="description"
      style={{
        fontSize: "clamp(1rem, 2.5vw, 1.4rem)", // Responsive font size
        color: "#0d0d0dff",
        lineHeight: "1.6",
        fontWeight: "500",
        letterSpacing: "1.6px",
        width: "100%",
        maxWidth: "1400px", // Narrower for better readability on large screens
        margin: "20px auto 0",
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

      <section className="skill-development-section">
        {/* Image section above the content */}
        <div className="skill-development-image-section">
          <img 
            src={SkillDevlopment} 
            alt="Skill Development Programs" 
          />
        </div>
        
        <div className="skill-development-container">
          <div className="skill-development-content">
            <div className="skill-development-text">
              <p>
                Jan Samar foundation offers a variety of free vocational training programs, including Basic
                Computer Skills and Management Skills. By focusing on skill development and self-sufficiency,
                the foundation helps individuals break the cycle of dependency on external aid. This
                approach encourages them to thrive in their communities and achieve greater financial
                stability.
              </p>
              <p>
                Participants embark on a journey to master essential troubleshooting techniques and gain
                hands-on experience, empowering them to tackle real-world challenges with confidence. By
                the end of the course, trainees acquire invaluable skills needed to pursue entry-level jobs in
                the service industry or to launch their own small businesses. With guidance on customer
                service and entrepreneurship, this program inspires participants to unlock their full potential in
                their chosen paths.
              </p>
            </div>
            
            <div className="skill-development-svg">
              <img
                src={SkillIllustration}
                alt="Skill Development Illustration"
                className="skill-illustration-svg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="course-offered-section">
        <h1 className="section-title">
          Courses Offered
        </h1>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-icon">
                {course.icon}
              </div>
              <h3 className="course-title">{course.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <div className="program-intent-section">
        <div className="program-intent-card">
          <h2 className="program-intent-title">Program Intent</h2>
          <div className="intent-list">
            {programIntents.map((intent) => (
              <div key={intent.id} className="intent-item">
                <div className="intent-icon">
                  {intent.icon}
                </div>
                <p className="intent-text">{intent.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Images Grid */}
        <div className="program-images-grid">
          {programImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="program-image"
            />
          ))}
        </div>

        <div className="contact-section">
          <p className="contact-text">
            *For more details or queries{' '}
            <a href="#contact" className="contact-link">Contact Us</a>
          </p>
        </div>
      </div>


            <h1 className="section-title" style={{
              margin: "0"
            }}>
        Ongoing Courses
      </h1>

      <section className="ongoing-section">


<div class="ongoing-program-container">
  <div class="ongoing-banner">
    <h2>Air Conditioner & Refrigerator Service<br/>Training Program</h2>
  </div>
  <p class="ongoing-description">
    The Air Conditioner & Refrigerator Service Training Program equips participants with essential skills to service and repair air conditioning and refrigeration units. It covers system operation, troubleshooting, safety practices, and includes hands-on training, making it ideal for those pursuing a career in HVAC and refrigeration services.
  </p>
  <a href="#" class="ongoing-read-more">Read more</a>
</div>



      <div className="carousel-container">
        <div className="carousel-layer layer-bg-left">
          <img
            src={images[(currentIndex - 2 + images.length) % images.length]}
            alt="Background Left"
            className="carousel-image"
          />
        </div>

        <div className="carousel-layer layer-bg-right">
          <img
            src={images[(currentIndex + 2) % images.length]}
            alt="Background Right"
            className="carousel-image"
          />
        </div>

        <div className="carousel-layer layer-prev">
          <img
            src={images[getPreviousIndex()]}
            alt="Previous"
            className="carousel-image"
          />
        </div>

        <div className="carousel-layer layer-next">
          <img
            src={images[getNextIndex()]}
            alt="Next"
            className="carousel-image"
          />
        </div>

        <div className="carousel-layer layer-main">
          <img
            src={images[currentIndex]}
            alt="Current"
            className="carousel-image"
          />
        </div>
        </div>

      </section>

      {/* education */}

            <section className="Education-Campaign-section">
        <div className="Education-Campaign-image-section">
          <img 
            src={EducationCampaign} 
            alt="Education Campaign" 
          />
        </div>
        <div className="Education-Campaign-container">
<h1 className="section-title" style={{

            }}>
        Education Campaign
      </h1>

              <p>
          In the vibrant town of Panvel, we embarked on an inspiring educational campaign at a local government school, dedicated to empowering around
children to enhance their learning experiences and cultivate their self-confidence. Our heartfelt goal was to support students who faced various
challenges in their studies, all while transforming learning into a joyous and meaningful adventure. With the unwavering commitment of our
enthusiastic team of volunteers, we strived to create a welcoming atmosphere where every child felt valued, encouraged, and eager to explore
new knowledge.
        </p>

<div className="college-image-container ">
        
       <div className="collage-container">
            <div className="main-photo">
                <img src={img1} alt="Main" />
            </div>
            
            <div className="secondary-photo">
                <img src={img2} alt="Secondary" />
            </div>
            
            <div className="circular-photo">
                <img src={img3} alt="Circular" />
            </div>
    </div>

    <div className="college-content">
          <p>   Our journey began with a thorough exploration of the students' strengths and
challenges, allowing us to tailor our approach to their unique needs. Drawing on their
interests and backgrounds, we employed creative and engaging methods—such as
vibrant storytelling, imaginative drawing, and hands-on experiments—to teach
essential subjects like English, math, and science. Beyond academic learning, we also
facilitated enriching sessions focused on crucial life skills, including teamwork,
problem-solving, and the art of confident self-expression.
        </p>
        <p>
          The campaign reached its exhilarating climax with a colorful “Learning Carnival,” a
weekend extravaganza where students proudly displayed their diverse talents
through captivating exhibitions, theatrical plays, and spirited competitions. The
atmosphere was charged with joy and excitement, as friends, families, and
community members came together to celebrate the students' achievements.
Witnessing their newfound confidence and enthusiasm was deeply moving,
reminding everyone of the transformative power of education. This unforgettable
event not only highlighted the children's progress but also strengthened community
bonds, reinforcing the belief that education can ignite meaningful change in our lives.
        </p>
        <p>
          Our first education campaign was held at (government school name) around 110
students held for four days on weekends. Our vision is to ignite similar campaigns in
every school and as many students as possible by 2030. This wouldn’t be possible
without the unwavering support of our generous donors and dedicated volunteers.
        </p>
    </div>


</div>
                <p>
          We extend our heartfelt gratitude to all who have played a part in bringing this dream to life, paving the way for a brighter and more inclusive
future through education.
        </p>
        </div>
        </section>

<hr style={{
  width: '85%',
  height: '2px',
  backgroundColor: '#d2691e',
  marginTop: '40px',
  margin: '60px auto 40px',  // Centers the line
  border: 'none'
}} />

{/* plant */}




            <section className="Education-Campaign-section">

        <div className="Education-Campaign-container">
<h1 className="section-title" style={{

            }}>
        Plantation Drive
      </h1>

              <p>
We organized an energetic plantation drive to cultivate a greener and healthier environment for our community. Our primary objective was to raise
awareness about the vital role trees play in our ecosystem and to actively engage local residents in the noble effort to protect and preserve nature.
With the enthusiastic support of local residents and dedicated volunteers, we transformed this initiative into a significant leap toward a more
sustainable and harmonious future. 
        </p>

<div className="college-image-container reverse">
        
       <div className="collage-container">
            
            <div className="main-photo">
                <img src={img1} alt="Main" />
            </div>
            
            <div className="secondary-photo">
                <img src={img2} alt="Secondary" />
            </div>
            
            <div className="circular-photo">
                <img src={img3} alt="Circular" />
            </div>
    </div>

    <div className="college-content">
          <p>  To kick off the campaign, we thoughtfully selected areas around schools and
prominent public spaces in Panvel that were most in need of greenery. After
assessing the locations, we chose to plant a diverse array of saplings, focusing on
native species and fruit-bearing trees. This approach not only aimed to enhance
local biodiversity but also to uplift the overall health of the ecosystem. 
        </p>
        <p>
          Throughout the event, volunteers connected with participants, sharing the myriad
benefits these trees would bring to our community. They emphasized how the newly
planted trees would help mitigate air pollution, provide much-needed shade, and
create more aesthetically pleasing surroundings. Additionally, they highlighted the
long-term advantages of these trees, such as supporting wildlife, improving soil
quality, and enhancing the overall quality of life for residents. 
        </p>
        <p>
The plantation drive not only enriched our environment but also sparked a sense of
collective responsibility among community members, reminding us that together we
can make a lasting impact on our planet.
        </p>
                <p>
To kick off our initiative, we focused on (public park name), which had a lack of trees
and plants. This drive took place on weekends in the month of (month) and attracted
around 50 volunteers who made it possible. Our goal is to transform all poorly
maintained parks into beautiful, green, and clean environments, helping to alleviate
daily stress and promote a refreshed mind and body.
        </p>
    </div>


</div>
        
        </div>
        </section>

            <section className="Contributors-section" style={{
              backgroundColor: "white",
              margin: "0",
              padding: "0"
            }}>
              <div className="Contributors-container">
                <div className="Contributors-heading">
                  <h1 className="first">A Word from our Volunteers</h1>
                </div>
                
                <div className="Contributors-grid">
                  <div className="contributor-card">
                    <div className="contributor-card-content">
                      <p className="testimonial">I had the opportunity to meet and support all the individuals involved. The time I spent with those kids filled me with joy beyond measure.</p>
                      <div className="contributor-info">
                        <div className="contributor-avatar">
                          <img src={img4} alt="Mukesh" />
                        </div>
<div className="contributor-details" style={{textAlign: 'start'}}>
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
<div className="contributor-details" style={{textAlign: 'start'}}>
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
<div className="contributor-details" style={{textAlign: 'start'}}>
                          <h3 className="contributor-name">
                            Ranjith Reddy <span className="location">,Hyderabad</span>
                          </h3>
                          <p className="contributor-state">Telangana</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

              
            </section>

<hr style={{
  width: '85%',
  height: '2px',
  backgroundColor: '#d2691e',
  marginTop: '40px',
  margin: '60px auto 40px',  // Centers the line
  border: 'none'
}} />
{/* food */}
        

            <section className="Education-Campaign-section">

        <div className="Education-Campaign-container">
<h1 className="section-title" style={{

            }}>
        Food Distributions
      </h1>

              <p>
          Our primary goal was to ensure that no individual or family in our community experienced hunger and to provide essential relief to those
grappling with financial hardships. With the unwavering support of a diverse team of dedicated volunteers and engaged local community
members, we united to launch a comprehensive initiative designed to make a significant and lasting impact.
        </p>

<div className="college-image-container ">
        
       <div className="collage-container">
            <div className="main-photo">
                <img src={img1} alt="Main" />
            </div>
            
            <div className="secondary-photo">
                <img src={img2} alt="Secondary" />
            </div>
            
            <div className="circular-photo">
                <img src={img3} alt="Circular" />
            </div>
    </div>

    <div className="college-content">
          <p>  To effectively tackle the needs of our community, we conducted extensive
assessments to pinpoint the areas most in need of assistance. Our focus was
directed towards slum communities, homeless shelters, and underprivileged
neighborhoods, where food insecurity was rampant and families regularly struggled
to access even the most basic necessities, such as healthy meals and hygiene
products.
        </p>
        <br />
                <br />
        <br />

        <p>
         By the conclusion of our food drive, we proudly distributed hundreds of nutritious
meals, along with carefully packed ration kits containing staple items like rice, lentils,
canned goods, and fresh produce. This outreach directly benefited individuals and
families in urgent need. Each meal and kit offered immediate sustenance and
alleviated some of the stress associated with food scarcity.
        </p>
                <br />
        <br />

        <p>
          More than just a logistical effort, this initiative cultivated a profound sense of unity
and support within the Panvel community. It reinforced our shared commitment to
uplifting one another during challenging times, fostering relationships among
community members and volunteers alike. The success of this endeavor not only
addressed immediate needs but also planted the seeds for ongoing collaboration
and resilience in our community moving forward.
        </p>
    </div>
</div>
        </div>
        </section>


            <section className="Contributors-section" style={{
              backgroundColor: "white",
              margin: "0",
              padding: "0"
            }}>
              <div className="Contributors-container">
                <div className="Contributors-heading">
                  <h1 className="first">A Word from our Volunteers</h1>
                </div>
                
                <div className="Contributors-grid">
                  <div className="contributor-card">
                    <div className="contributor-card-content">
                      <p className="testimonial">I had the opportunity to meet and support all the individuals involved. The time I spent with those kids filled me with joy beyond measure.</p>
                      <div className="contributor-info">
                        <div className="contributor-avatar">
                          <img src={img4} alt="Mukesh" />
                        </div>
<div className="contributor-details" style={{textAlign: 'start'}}>
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
<div className="contributor-details" style={{textAlign: 'start'}}>
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
<div className="contributor-details" style={{textAlign: 'start'}}>
                          <h3 className="contributor-name">
                            Ranjith Reddy <span className="location">,Hyderabad</span>
                          </h3>
                          <p className="contributor-state">Telangana</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

              
            </section>


<hr style={{
  width: '85%',
  height: '2px',
  backgroundColor: '#d2691e',
  marginTop: '40px',
  margin: '60px auto 40px',  // Centers the line
  border: 'none'
}} />

        
    </>
  );
};

export default Program;