import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App';
import Links from './pages/Links';
import PageNotFound from './pages/404Page';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderSite(){
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/links.html" element={<Links />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
}

renderSite()





