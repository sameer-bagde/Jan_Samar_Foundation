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
    }, 5000);

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
        {/* Background layers - far left */}
        <div className="carousel-layer layer-bg-left">
          <img
            src={images[(currentIndex - 2 + images.length) % images.length]}
            alt="Background Left"
            className="carousel-image"
          />
        </div>

        {/* Background layers - far right */}
        <div className="carousel-layer layer-bg-right">
          <img
            src={images[(currentIndex + 2) % images.length]}
            alt="Background Right"
            className="carousel-image"
          />
        </div>

        {/* Previous image - left */}
        <div className="carousel-layer layer-prev">
          <img
            src={images[getPreviousIndex()]}
            alt="Previous"
            className="carousel-image"
          />
        </div>

        {/* Next image - right */}
        <div className="carousel-layer layer-next">
          <img
            src={images[getNextIndex()]}
            alt="Next"
            className="carousel-image"
          />
        </div>

        {/* Main current image - center top */}
        <div className="carousel-layer layer-main">
          <img
            src={images[currentIndex]}
            alt="Current"
            className="carousel-image"
          />
        </div>
        </div>

      </section>

            <section className="Education-Campaign-section">
        {/* Image section above the content */}
        <div className="Education-Campaign-image-section">
          <img 
            src={EducationCampaign} 
            alt="Education Campaign" 
          />
        </div>
        </section>
    </>
  );
};

export default Program;