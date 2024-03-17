// src/pages/Home.js

import React from 'react';

const Home = () => {
  return (
    <main className="container text-center">
      {/* Image */}
      <div className="mt-4">
        <img src="../../public/index/developer.jpg" className="img-fluid rounded-circle" alt="Eric Grigor" style={{ maxWidth: '350px' }} />
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
  );
};

export default Home;
