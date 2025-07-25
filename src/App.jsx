import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/Home/Home';
import About from './components/AboutPage/About';
import GetInvoled from './components/GetInvolvedPage/GetInvoled';
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
              <Route path="/programs" element={<div>Programs Page Coming Soon</div>} />
              <Route path="/terms" element={<div>Terms & Conditions Page Coming Soon</div>} />
              <Route path="/privacy" element={<div>Privacy Policy Page Coming Soon</div>} />
              <Route path="/refund" element={<div>Return & Refund Policy Page Coming Soon</div>} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;