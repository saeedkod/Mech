import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "/components/Services/Services" element = {<Services />}></Route>
      <Route path = "/components/Work/Work" element = {<Work />}></Route>
      <Route path = "/components/About/About" element = { <About />}></Route>
      <Route path = "/components/Footer/Footer" element = { <Footer />}></Route>
    </Routes>
  </BrowserRouter>
);

