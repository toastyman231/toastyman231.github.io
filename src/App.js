//import './App.css';
import HomePage from './pages/HomePage';
import SideBar from './pages/SideBar';
import ProjectsPage from './pages/ProjectsPage';
import React, { useState } from 'react';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Cookies from 'universal-cookie';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

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

function App() {
  const cookies = new Cookies('lastPage');
  let cookie = cookies.get('lastPage') ?? 'Home';

  const [page, setPage] = useState(cookie);

  const components = {
    "Home": <HomePage pageSetter={setPage} />,
    "Projects": <ProjectsPage />,
    "About": <AboutPage />,
    "Contact": <ContactPage />
  };

  return (
    <div className="flex">
      <SideBar pageSetter={setPage} />
      {components[page]}
    </div>
  );
}

export default App;
