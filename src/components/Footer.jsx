 // react-portfoli/src/components/Footer.js

 import React from 'react';

 const Footer = () => {
   return (
     <footer className="bg-light text-center py-3">
       <ul className="list-inline">
         <li className="list-inline-item">
           {/* Updated image path */}
           <a href="https://github.com/e41c" target="_blank" rel="noopener noreferrer">
             <img src={process.env.PUBLIC_URL + "/icons/icons8-github-50.png"} alt="GitHub" className="social-icon" />
           </a>
         </li>
         <li className="list-inline-item">
           {/* Updated image path */}
           <a href="https://www.linkedin.com/in/eric-grigor/" target="_blank" rel="noopener noreferrer">
             <img src={process.env.PUBLIC_URL + "/icons/icons8-linkedin-50.png"} alt="LinkedIn" className="social-icon" />
           </a>
         </li>
         <li className="list-inline-item">
           {/* Updated image path */}
           <a href="https://www.instagram.com/le41cl" target="_blank" rel="noopener noreferrer">
             <img src={process.env.PUBLIC_URL + "/icons/instagram-logo.png"} alt="Instagram" className="social-icon" />
           </a>
         </li>
       </ul>
       <p>© Eric Grigor: 2016-2023</p>
     </footer>
   );
 };
 
 export default Footer;
 