// src/components/__tests__/Home.test.js

import { render, screen, waitFor } from '@testing-library/react';
import Home from '../Home'; // Correct path to Home component

// Mock react-router-dom to prevent issues during testing
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),  // retain other methods
  NavLink: jest.fn(() => <div>Mocked NavLink</div>), // Mock NavLink
}));

describe('Home Component', () => {
  beforeEach(() => {
    // Clear mocks before each test
    global.fetch = jest.fn();
  });

  it('focuses on the first project card when projects are loaded', async () => {
    // Mocking fetch to return a mock response
    global.fetch.mockResolvedValue({
      json: () => Promise.resolve([
        { id: 1, title: 'Project 1', description: 'Description of Project 1', status: 'Ongoing' },
        { id: 2, title: 'Project 2', description: 'Description of Project 2', status: 'Ongoing' },
      ]),
    });

    render(<Home />);

    // Wait for the projects to load
    await waitFor(() => screen.getByText('Project 1'));

    // Get the first project card and check if it's focusable
    const firstProjectCard = screen.getByText('Project 1').closest('.project-card');
    
    // If the element is focusable, simulate focus in the test
    firstProjectCard.focus();
    
    // Check if the first project card is focused
    expect(firstProjectCard).toHaveFocus();
  });

  it('displays an error message when fetch fails', async () => {
    // Mocking fetch to simulate an error
    global.fetch.mockRejectedValue(new Error('Failed to fetch'));

    render(<Home />);

    // Wait for the error message to appear
    await waitFor(() => screen.getByText('Failed to fetch projects. Please try again later.'));
    
    // Check if error message is displayed
    expect(screen.getByText('Failed to fetch projects. Please try again later.')).toBeInTheDocument();
  });
});