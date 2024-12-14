import React, { useState, useEffect } from 'react';
import './UserProfile.css'; // Import the CSS file

function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Fetch user profile details from the backend
    fetch('https://api.renewableconnect.com/user/profile')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setUser(data))
      .catch((error) => {
        setError('Error fetching user profile. Please try again later.');
        console.error('Error fetching user profile:', error);
      });
  }, []);

  // Render error state
  if (error) {
    return <p className="error">{error}</p>; // Display error message
  }

  // Render loading state
  if (!user) {
    return <p>Loading user profile...</p>; // Show loading message if no data is loaded yet
  }

  // Render user profile once data is fetched
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
            <button>Change Profile Picture</button> {/* Add functionality to change the picture */}
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