import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './SubmitProject.css'; // Import the CSS file

function SubmitProject() {
  const submitProject = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('https://api.renewableconnect.com/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to submit project. Please try again.');
      }

      const data = await response.json();
      console.log('Project successfully submitted:', data);
      alert('Project submitted successfully!');
      resetForm();
    } catch (error) {
      console.error('Error submitting project:', error);
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  };

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
        onSubmit={submitProject}
      >
        {({ isSubmitting }) => (
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

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Project'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SubmitProject;