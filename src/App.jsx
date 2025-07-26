import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/Home/Home';
import About from './components/AboutPage/About';
import GetInvoled from './components/GetInvolvedPage/GetInvoled';
import Contact from './components/ContactUsPage/contact'
import ScrollToTop from './components/ScrollToTop'; 
import './App.css';

function App() {
  return (
    <>
      <div id="root">
        <ScrollToTop />
        <Header />
        <main>
          <div className="max-width">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/get-involved" element={<GetInvoled />} />
              <Route path="/programs" element={<div style={{
                textAlign: 'center'
              }}>Programs Page Coming Soon</div>} />

              <Route path="/contact-us" element={<Contact />} />

              <Route path="/terms" element={<div style={{
                textAlign: 'center'
              }}>Terms & Conditions Page Coming Soon</div>} />

              <Route path="/privacy" element={<div style={{
                textAlign: 'center'
              }}>Privacy Policy Page Coming Soon</div>} />

              <Route path="/upcoming-events" element={<div style={{
                textAlign: 'center'
              }}>Upcoming Events Page Coming Soon</div>} />
                            <Route path="/ongoing-events" element={<div style={{
                textAlign: 'center'
              }}>Ongoing Events Page Coming Soon</div>} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;