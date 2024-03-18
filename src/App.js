// react-portfolio/src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BioSection from './pages/BioSection';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="container text-center">
            {/* Image */}
            <div className="mt-4">
              <img src="index/developer.jpg" className="img-fluid rounded-circle" alt="Eric Grigor" style={{ maxWidth: '350px' }} />
            </div>

            {/* Welcome Text */}
            <div className="mt-4">
              <h3>Eric Grigor</h3>
              <small className="text-muted">Web/Software Developer</small>
            </div>

            {/* Quote with improved styling */}
            <div className="mt-4" style={{ padding: '20px', fontStyle: 'italic', fontSize: '1.2rem' }}>
              <p className="mb-0">"Talk is cheap. Show me the code."</p>
              <footer className="blockquote-footer" style={{ marginTop: '10px' }}>Linus Torvalds</footer>
            </div>
          </main>
        }/>
        <Route path="/bio" element={<BioSection />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
