import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Content from './components/content/content';

import './App.css';

function App() {
  return (
    <div id="root">
      <Header />
      <main>
        <div className="max-width">
          <Content/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;