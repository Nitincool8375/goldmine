import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import SimpleReactLightbox from 'simple-react-lightbox'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    {/* <SimpleReactLightbox> */}
      <App />
      {/* </SimpleReactLightbox> */}
    </React.StrictMode>
  </BrowserRouter>
);
