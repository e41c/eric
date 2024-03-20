// react-portfoli/src/pages/ProjectPage.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from react-icons/fa
import { SiExpress, SiReact, SiNodedotjs, SiBootstrap, SiFlutter, SiFirebase, SiVite } from 'react-icons/si'; // Corrected import

const projects = [
  { 
    name: 'Swift Scheduler',
    description: 'Capstone MERN-stack full-stack web app, building for small schools for teacher and student and class management.', 
    techStack: [
      { name: 'MongoDB', category: 'Database' },
      { name: 'Express.js', category: 'Backend' },
      { name: 'React', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Bootstrap', category: 'Frontend' }
    ],
    html_url: 'https://github.com/e41c/Capstone-II---Group26' 
  },
  { 
    name: 'Shopping List & Tax Calculator', 
    description: 'A true Cross-platform app, written in Flutter, working with IOS, Android, Web(browser), macOS, windows. Also using Google\'s Firebase database.', 
    techStack: [
      { name: 'Flutter', category: 'Mobile & Web Framework' },
      { name: 'Firebase', category: 'Database & Backend Services' }
    ],
    html_url: 'https://github.com/e41c/group33_shopping_list_app' 
  },
  { 
    name: 'Meal Mate', 
    description: 'Cross-platform mobile app, written in React-Native, that helps users find restaurants nearby, and review ratings and comments.', 
    techStack: [
      { name: 'React Native', category: 'Mobile Framework' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Vite', category: 'Frontend Tooling' }
    ],
    html_url: 'https://github.com/e41c/mealMate' 
  },
  // Add more projects as needed
];

const getIconForTech = (techName) => {
  switch (techName) {
    case 'MongoDB':
      return null; // As previously mentioned, MongoDB icon is handled differently
    case 'Express.js':
      return <SiExpress />;
    case 'React':
      return <SiReact />;
    case 'Node.js':
      return <SiNodedotjs />; // Corrected reference here
    case 'Bootstrap':
      return <SiBootstrap />;
    case 'Flutter':
      return <SiFlutter />;
    case 'Firebase':
      return <SiFirebase />;
    case 'React Native':
      return <SiReact />; // Assuming you want to use the same icon for React and React Native
    case 'Vite':
      return <SiVite />;
    default:
      return null; // For any unspecified technologies
  }
};

const ProjectsPage = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 mt-5">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <div className="card-text">
                  <strong>Tech Stack:</strong>
                  <ul>
                    {project.techStack.map(({ name, category }) => (
                      <li key={name}>
                        {getIconForTech(name)} {name} - <em>{category}</em>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card-footer">
                <a href={project.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2" />View GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
