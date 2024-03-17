import React from 'react';

const projects = [
  // Replace these with your actual GitHub project data
  { name: 'Project 1', description: 'This is project 1 description', html_url: 'https://github.com/yourusername/project1' },
  { name: 'Project 2', description: 'This is project 2 description', html_url: 'https://github.com/yourusername/project2' },
  { name: 'Project 3', description: 'This is project 3 description', html_url: 'https://github.com/yourusername/project3' },
  { name: 'Project 4', description: 'This is project 4 description', html_url: 'https://github.com/yourusername/project4' },
  { name: 'Project 5', description: 'This is project 5 description', html_url: 'https://github.com/yourusername/project5' },
];

const ProjectsPage = () => {
  return (
    <div className="container mt-4">
      <h2>My Projects</h2>
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
