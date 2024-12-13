// src/components/SubmitProject.js

import React, { useState } from 'react';
import './ProjectDetail.css';
function SubmitProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = { title, description, status, location };

    fetch('https://api.renewableconnect.com/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Project submitted successfully:', data);
        // Redirect to homepage or project list page after submission
      })
      .catch((error) => {
        setError('Error submitting project.');
        console.error('Error submitting project:', error);
      });
  };

  return (
    <div className="SubmitProject">
      <h2>Submit a New Project</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Project</button>
      </form>
    </div>
  );
}

export default SubmitProject;