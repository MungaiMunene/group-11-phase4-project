import React, { useEffect, useState } from 'react';
// Uncomment below line when backend is ready
// import { fetchResources } from '../api';

function ResourceDirectory() {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');

  // Mock data for frontend-only testing
  const mockResources = [
    { id: 1, name: 'Solar Panel Guide', link: 'https://example.com/solar' },
    { id: 2, name: 'Wind Energy Basics', link: 'https://example.com/wind' },
  ];

  useEffect(() => {
    // Use mock data until backend is ready
    const fetchMockResources = () => {
      try {
        setResources(mockResources);
      } catch (err) {
        setError('Error fetching resources.');
      }
    };

    fetchMockResources();

    // Uncomment this block when backend is ready
    // const getResources = async () => {
    //   try {
    //     const data = await fetchResources();
    //     setResources(data);
    //   } catch (err) {
    //     setError('Error fetching resources.');
    //   }
    // };
    // getResources();
  }, []);

  return (
    <div>
      <h2>Resource Directory</h2>
      {error && <p>{error}</p>}
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceDirectory;