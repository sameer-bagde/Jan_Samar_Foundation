import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Remove "as Router"
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>  {/* Use StrictMode, not React.StrictMode */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);