// src/components/Resources.js

import React, { useEffect, useState } from 'react';
import './Resources.css';
function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Fetch resources from your backend API
    fetch('https://api.renewableconnect.com/resources')
      .then((response) => response.json())
      .then((data) => {
        setResources(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError('Error fetching resources.');
        setLoading(false); // Set loading to false if there's an error
        console.error('Error fetching resources:', error);
      });
  }, []);

  return (
    <div className="Resources">
      <h2>Resource Directory</h2>
      <p>Explore available resources for renewable energy projects in Kenya.</p>

      {/* Show loading indicator while data is being fetched */}
      {loading && <p>Loading resources...</p>}

      {/* Show error message if fetching fails */}
      {error && <p className="error">{error}</p>}

      {/* List resources */}
      <div className="resources-list">
        {resources.length > 0 ? (
          resources.map((resource) => (
            <div key={resource.id} className="resource-card">
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          ))
        ) : (
          <p>No resources available at the moment. Check back soon!</p>
        )}
      </div>
    </div>
  );
}

export default Resources;