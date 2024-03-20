// react-portfoli/src/pages/ResumePage.jsx

import React from 'react';

const ResumePage = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Resume</h2>

      <div className="text-center mb-4">
        <img src={process.env.PUBLIC_URL + "/images/cv.jpg"} className="img-fluid rounded image-animate" alt="Dev at work" style={{ maxWidth: '300px' }} />
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title"><strong>Education</strong></h3>
          <hr />
          {/* Education details */}
          <h5>George Brown College (Toronto, Ontario)</h5>
          <ul>
            <li>Computer Programming and Analysis (T177)</li>
            <li>Comprehensive three-year (six-semester) Computer Programmer Analyst program</li>
            <li>Web application design and development, full-stack development, Mobile application development</li>
            <li>Skills in HTML, CSS (Bootstrap), Javascript (React), Python, C#, Java, MYSQL, Oracle Database, Azure, AWS, Linux</li>
            <li>Web App development C#(Asp.net MVC), Java(Springboot), Python(Django)</li>
            <li>Mobile development Java(Android Studio)</li>
          </ul>
          <h5>Ryerson University (Toronto, Ontario)</h5>
          <ul>
            <li>International Economics and Finance - Completed 2/4 Years towards a (BA)</li>
            <li>Minored in Corporate Accounting pairing well, with a major of economics and finance.</li>
            <li>International work studies, case studies, advanced analysis and computer simulations, and specialized training in economics, finance, mathematics, and statistics.</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h3 className="card-title"><strong>Work Experience</strong></h3>
          <hr />
          {/* Work experience details */}
          <h5>Pinnacle Caterers 2017-2023 (Toronto, Ontario)</h5>
          <ul>
            <li>Working inside Scotiabank Arena, under MLSE (Maple Leaf Sports & Entertainment) in their Executive Suites.</li>
            <li>Working inside Lakehouse (Toronto's Premier Members Club) located in Budweiser Stage.</li>
            <li>Working inside BMO Field, under MLSE providing catering for Teams (Home and Visiting) and Media.</li>
          </ul>
          <h5>Harbour 60 Toronto 2020-2023 (Toronto, Ontario)</h5>
          <ul>
            <li>SA(Server Assistant) helping ensure high-level expectations of service.</li>
            <li>In-depth knowledge of menu items, and proper plating etiquette.</li>
            <li>Exposure to world-class ingredients like Japanese A5 wagyu and Aussie Wagyu, and a large rare wine collection.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
