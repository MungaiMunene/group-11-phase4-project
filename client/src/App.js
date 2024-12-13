import React from 'react';
import './App.css'; // Add your custom styles here
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';  // For meta tags and SEO

// Import pages/components
import Home from './components/Home';
import SubmitProject from './components/SubmitProject';
import ProjectDetail from './components/ProjectDetail';
import Resources from './components/Resources';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        {/* SEO meta tags */}
        <Helmet>
          <title>RenewableConnect Kenya</title>
          <meta name="description" content="Connecting renewable energy projects with resources in Kenya" />
        </Helmet>

        {/* Header */}
        <header className="App-header">
          <h1>RenewableConnect Kenya</h1>
        </header>

        {/* Navigation */}
        <nav className="App-nav">
          <ul>
            <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
            <li><NavLink to="/submit-project" activeClassName="active-link">Submit Project</NavLink></li>
            <li><NavLink to="/resources" activeClassName="active-link">Resources</NavLink></li>
            <li><NavLink to="/profile" activeClassName="active-link">User Profile</NavLink></li>
          </ul>
        </nav>

        {/* Routing Setup */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/submit-project" component={SubmitProject} />
          <Route path="/project/:id" component={ProjectDetail} />
          <Route path="/resources" component={Resources} />
          <Route path="/profile" component={UserProfile} />
          
          {/* 404 Page Not Found Route */}
          <Route path="*" component={() => <h1>404 - Page Not Found</h1>} />
        </Switch>

        {/* Footer */}
        <footer className="App-footer">
          <p>© 2024 RenewableConnect Kenya. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;