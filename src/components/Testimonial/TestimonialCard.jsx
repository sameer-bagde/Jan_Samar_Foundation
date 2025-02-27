// TestimonialCard.jsx
import React, { useState, useEffect } from 'react';
import './TestimonialCard.css';

const TestimonialCard = () => {
  const testimonials = [
    {
      id: 1,
      name: "Thyagarajan",
      title: "Entrepreneur",
      text: "I had the opportunity to meet and support all the individuals involved. The time I spent with those kids filled me with joy beyond measure. I look forward to collaborating with Jan Samar in the future to further contribute to their meaningful cause."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Marketing Director",
      text: "Working with this team has been an incredible experience. Their dedication to excellence and innovation has truly transformed our approach. I'm excited to see what we'll accomplish together in the coming year."
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Project Lead",
      text: "The collaborative spirit and genuine passion demonstrated by everyone involved made this project a success. I'm grateful for the opportunity to have been part of such a meaningful initiative."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlideDirection('slide-left');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 300); 
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlideDirection('slide-right');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }, 300); 
  };

  const goToSlide = (slideIndex) => {
    if (isAnimating || slideIndex === currentIndex) return;
    
    setIsAnimating(true);
    setSlideDirection(slideIndex > currentIndex ? 'slide-left' : 'slide-right');
    
    setTimeout(() => {
      setCurrentIndex(slideIndex);
    }, 300);
  };

  useEffect(() => {
    if (slideDirection) {
      const timer = setTimeout(() => {
        setSlideDirection('');
        setIsAnimating(false);
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [slideDirection]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
    <section>
    <div className="testimonial-container">
      <div className={`testimonial-card ${slideDirection}`}>
        <div className="left-panel">
          <div className="vertical-overflow-container">
            <div className="profile-content">
              <div className="profile-image-container">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Profile" 
                  className="profile-image"
                />
              </div>
              <h2 className="profile-name">{currentTestimonial.name}</h2>
              <p className="profile-title">{currentTestimonial.title}</p>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="testimonial-content">
            <span className="quote-mark quote-open">"</span>
            <p className="testimonial-text">
              {currentTestimonial.text}
            </p>
            <span className="quote-mark quote-close">"</span>
          </div>
        </div>
      </div>
      
      <div className="navigation-dots">
        {testimonials.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
      
      <div className="navigation-arrows">
        <button 
          className={`arrow-button prev ${isAnimating ? 'disabled' : ''}`} 
          onClick={goToPrev}
          disabled={isAnimating}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className={`arrow-button next ${isAnimating ? 'disabled' : ''}`} 
          onClick={goToNext}
          disabled={isAnimating}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
      </section>
    </>
  );
};

export default TestimonialCard;