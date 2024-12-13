// src/components/UserProfile.js

import React, { useState, useEffect } from 'react';
import './UserProfile.css';  // Import the CSS file
function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile details from the backend
    fetch('https://api.renewableconnect.com/user/profile')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user profile:', error));
  }, []);

  if (!user) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div className="UserProfile">
      <h2>Your Profile</h2>
      
      {/* Display user basic details */}
      <div className="user-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Location:</strong> {user.location}</p>
        
        {/* Profile Picture */}
        {user.profile_picture && (
          <div className="profile-picture">
            <img src={user.profile_picture} alt="Profile" />
            {/* Optionally, provide an option to update the picture */}
            <button>Change Profile Picture</button>
          </div>
        )}
      </div>

      {/* Display user projects */}
      <div className="user-projects">
        <h3>Your Projects</h3>
        {user.projects && user.projects.length > 0 ? (
          <ul>
            {user.projects.map((project) => (
              <li key={project.id}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p>Status: {project.status}</p>
                <a href={`/project/${project.id}`}>View Project</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>You have no projects yet.</p>
        )}
      </div>

      {/* Display user impact or contributions */}
      <div className="user-impact">
        <h3>Your Impact</h3>
        <p><strong>Total Projects:</strong> {user.projects.length}</p>
        <p><strong>Total Resources Contributed:</strong> {user.total_resources_contributed}</p>
        <p><strong>Total Energy Saved (in kWh):</strong> {user.total_energy_saved}</p>
      </div>

      {/* Add more sections as needed */}
    </div>
  );
}

export default UserProfile;