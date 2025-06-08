//import './App.css';
import HomePage from './pages/HomePage';
import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import SideBar from './pages/SideBar';
import Links from './pages/Links';
import PageNotFound from './pages/404Page';
import Project from './pages/Project';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Sandbox from './pages/Sandbox'
import { BrowserRouter, Routes, Route } from "react-router";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebaseApp);

export default function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <div className="lg:flex lg:flex-row">
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/links" element={<Links />} />
            <Route path="/links.html" element={<Links />} />
            <Route path="/projects/:projectID" element={<Project />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {
              process.env.NODE_ENV === 'development' &&
              <Route path="/sandbox/:projectID" element={<Sandbox />} />
            }
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </React.StrictMode>
    </BrowserRouter>
  );
}
