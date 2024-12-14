// src/components/ProjectDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams(); // Extract project ID from the URL
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch project details based on the project ID from the URL
    fetch(`https://api.renewableconnect.com/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch((error) => {
        setError('Error fetching project details.');
        console.error('Error fetching project details:', error);
      });
  }, [id]); // Re-fetch when the ID changes

  return (
    <div className="ProjectDetail">
      {error && <p className="error">{error}</p>}
      
      {project ? (
        <div>
          <h2>{project.title}</h2>
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Status:</strong> {project.status}</p>
          <p><strong>Location:</strong> {project.location}</p>
          <p><strong>Created At:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>
          {/* You can add more details if necessary */}
        </div>
      ) : (
        <p>Loading project details...</p>
      )}
    </div>
  );
}

export default ProjectDetail;