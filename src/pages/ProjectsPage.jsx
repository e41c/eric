// react-portfoli/src/pages/ProjectPage.jsx
import React from 'react';

const projects = [
  { name: 'Swift Scheduler',
   description: 'Capstone MERN-stack full-stack web app, building for small schools for teacher and student and class management.', 
   html_url: 'https://github.com/e41c/Capstone-II---Group26' },
  { name: 'Shopping List, and tax calculator', 
  description: 'A true Cross-platform app, written in Flutter, working with IOS, Android, Web(browser), macos, windows. Also using googles FireBase database.', 
  html_url: 'https://github.com/e41c/group33_shopping_list_app' },
  { name: 'Meal Mate', 
  description: 'Cross-platform mobile app, written in React-Native, that helps users find restaurants near by, and review ratings and comments.', 
  html_url: 'https://github.com/e41c/mealMate' },
  { name: 'Project 4', 
  description: 'This is project 4 description', 
  html_url: 'https://github.com/yourusername/project4' },
  { name: 'Project 5', 
  description: 'This is project 5 description', 
  html_url: 'https://github.com/yourusername/project5' },
];

const ProjectsPage = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 mt-5">My Projects</h2> {/* Adjusted margin to avoid cut-off */}
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
