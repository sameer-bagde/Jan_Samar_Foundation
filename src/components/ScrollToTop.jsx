// ScrollToTop.jsx - Enhanced version
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('Route changed to:', pathname); // Debug log
    
    // Scroll to top function
    const scrollToTop = () => {
      // Try multiple scroll methods for better compatibility
      setTimeout(() => {
        // Method 1: Standard scrollTo
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // Changed to instant for immediate effect
        });
        
        // Method 2: Fallback for older browsers
        window.scrollTo(0, 0);
        
        // Method 3: Document element scroll
        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
        }
        
        // Method 4: Body scroll
        if (document.body) {
          document.body.scrollTop = 0;
        }
        
        console.log('Scrolled to top'); // Debug log
      }, 0); // Small timeout to ensure DOM is updated
    };

    scrollToTop();
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;