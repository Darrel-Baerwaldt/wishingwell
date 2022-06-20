// Render Prop
import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import Button from '@mui/material/Button'
import { TextField } from '@mui/material';

const UploadPhoto = () => (
  <div>
    <Formik
      initialValues={{ url: '', date: '', note: '' }}
      validate={values => {
        const errors = {};
        if (!values.url) {
          errors.url = 'Required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {/* <Field type="url" name="url" placeholder="Paste image URL..." label="Image"/> */}
          <TextField type="url" name="url" placeholder="Paste image URL..." label="Image"/>
          <ErrorMessage name="url" component="div" />
          <br />
          <br />
          {/* <Field type="date" name="date" /> */}
          <TextField type="date" name="date" placeholder="Paste image URL..." />
          <ErrorMessage name="date" component="div" />
          <br />
          <br />
          {/* <Field type="text" name="note"  placeholder="What's got you feelin' goooood?" /> */}
          <TextField fullWidth type="text" name="note" placeholder="What's got you feelin' gooooood?" id="fullWidth"/>
          <ErrorMessage name="note" component="div"/>
          <br />
          <br />
          <Button type="submit" disabled={isSubmitting}>
            Upload
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default UploadPhoto;