// react-portfolio/src/pages/BioSection.js

import React from 'react';

const BioSection = () => {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <figure className="figure">
          <img src="/cv/cv.jpg" className="figure-img img-fluid rounded" alt="Dev at work" />
          <figcaption className="figure-caption">I like to code, camp, and cook!</figcaption>
        </figure>
      </div>

      <p className="lead">Eric: Programmer located in Toronto, Canada</p>
      <h3><strong>About Me:</strong></h3>
      <hr />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Discovered my love for programming at George Brown College in Toronto, where I completed a comprehensive three-year program in Computer Programming and Analysis.</li>
        <li className="list-group-item">Dived deep into web application design, full-stack development, and mobile application development, mastering tools like HTML, CSS (Bootstrap), JavaScript (React), Python, C#, Java, MYSQL, Oracle Database, Azure, AWS, and Linux.</li>
        <li className="list-group-item">I've even cooked up some incredible web apps using C# (Asp.net MVC), Java (Springboot), and Python (Django), and whipped up mobile magic with Java (Android Studio).</li>
        <li className="list-group-item">But my journey doesn't stop there. I also explored the world of economics and finance at Ryerson University, where I completed two out of four years towards a BA.</li>
        <li className="list-group-item">This diverse mix of skills allows me to provide advice and generate solutions in business, finance, and government.</li>
      </ul>
      <h3><strong>Work hard, Play hard</strong></h3>
      <hr />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">My work experience isn't just about coding. I've thrived in fast-paced, high-pressure environments.</li>
        <li className="list-group-item">I've had the pleasure of working inside Toronto's entertainment hubs like Scotiabank Arena under MLSE, where I catered to VIP clients in their Executive Suites and Lakehouse at Budweiser Stage.</li>
        <li className="list-group-item">I've also been a part of the action at BMO Field, providing catering for both home and visiting teams and media.</li>
      </ul>
      <h5>Play</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Beyond coding and work, I have a passion for outdoor adventures, particularly camping.</li>
        <li className="list-group-item">The thrill of exploring the great outdoors and coming up with creative campfire recipes adds an exciting twist to my life.</li>
        <li className="list-group-item">So whether I'm cooking up a storm in the kitchen, coding a masterpiece, or venturing into the wilderness, you can bet I'm always up for a new challenge and a dash of adventure.</li>
      </ul>
    </div>
  );
};

export default BioSection;
