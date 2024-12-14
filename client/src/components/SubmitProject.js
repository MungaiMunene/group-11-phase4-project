import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './SubmitProject.css'; // Import the CSS file

function SubmitProject() {
  return (
    <div className="SubmitProject">
      <h2>Submit a Renewable Energy Project</h2>
      <Formik
        initialValues={{
          title: '',
          description: '',
          location: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) errors.title = 'Project title is required';
          if (!values.description) errors.description = 'Description is required';
          if (!values.location) errors.location = 'Location is required';
          return errors;
        }}
        onSubmit={(values) => {
          // Handle form submission (e.g., send data to the backend)
          console.log('Project Submitted:', values);
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="title">Project Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field name="description" as="textarea" />
            <ErrorMessage name="description" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <Field name="location" type="text" />
            <ErrorMessage name="location" component="div" className="error" />
          </div>

          <button type="submit">Submit Project</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SubmitProject;