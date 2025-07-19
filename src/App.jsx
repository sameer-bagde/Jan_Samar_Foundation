import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Remove BrowserRouter import

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/Home/Home';
import About from './components/AboutPage/About';

import './App.css';

function App() {
  return (
    <div id="root">
      <Header />
      <main>
        <div className="max-width">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;