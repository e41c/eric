// react-portfolio/src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BioSection from './pages/BioSection';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import CoverLetterPage from './pages/CoverLetterPage'; // Import the CoverLetterPage component
import './App.css'; // Make sure this file contains the CSS for transitions
import AnimatedBackground from './components/AnimatedBackground';

function AppWithTransitions() {
  let location = useLocation(); // This hook gives you the current location

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="page"
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={
              <main className="container text-center mt-5">
                <img src={process.env.PUBLIC_URL + "/images/developer.jpg"} className="img-fluid rounded-circle mx-auto" alt="Eric Grigor" style={{ maxWidth: '350px' }} />
                <h3 className="mt-3">Eric Grigor</h3>
                <p className="text-muted">Web/Software Developer</p>
                <blockquote className="blockquote mt-4">
                  <p className="mb-0">"Talk is cheap. Show me the code."</p>
                  <footer className="blockquote-footer mt-2">Linus Torvalds</footer>
                </blockquote>
              </main>
            }/>
            <Route path="/bio" element={<BioSection />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/cover-letter" element={<CoverLetterPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWithTransitions />
    </Router>
  );
}

export default App;
