//import './App.css';
import HomePage from './HomePage';
import SideBar from './SideBar';
import ProjectsPage from './ProjectsPage';
import React, { useState } from 'react';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const components = {
  "Home": <HomePage />,
  "Projects": <ProjectsPage />,
  "About": <AboutPage />,
  "Contact": <ContactPage />
}

function App() {
  const [page, setPage] = useState('Home')

  return (
    <div className="flex">
      <SideBar pageSetter={setPage} />
      {components[page]}
    </div>
  );
}

export default App;
