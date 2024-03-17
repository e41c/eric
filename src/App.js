// react-portfolio/src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BioSection from './pages/BioSection';
import ProjectsPage from './pages/ProjectsPage';
import EducationSection from './pages/EducationSection';
import WorkExperienceSection from './pages/WorkExperienceSection';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<BioSection />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/work-experience" element={<WorkExperienceSection />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
