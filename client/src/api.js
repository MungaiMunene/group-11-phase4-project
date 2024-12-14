import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000'; // Backend URL to integrate

export const fetchResources = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/resources`);
    return response.data;
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
};

export const fetchUserProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user-profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const submitProject = async (projectData) => {
  try {
    const response = await axios.post(`${BASE_URL}/submit-project`, projectData);
    return response.data;
  } catch (error) {
    console.error('Error submitting project:', error);
    throw error;
  }
};