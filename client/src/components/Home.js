import React, { useEffect, useState } from 'react';
import './Home.css'; // Import Home-specific styles
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

function Home() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch ongoing projects from your backend (assuming API endpoint)
    fetch('https://api.renewableconnect.com/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setError('Failed to fetch projects. Please try again later.'); // Show error message
      });
  }, []);

  return (
    <div className="Home">
      <h2>Welcome to RenewableConnect Kenya</h2>
      <p>Stay informed about renewable energy projects in your community.</p>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Display ongoing projects */}
      <div className="projects-list">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Status: {project.status}</p>
              {/* Use NavLink for routing */}
              <NavLink to={`/project/${project.id}`} className="project-link">View Details</NavLink>
            </div>
          ))
        ) : (
          <p>No ongoing projects at the moment. Check back soon!</p>
        )}
      </div>
    </div>
  );
}

export default Home;