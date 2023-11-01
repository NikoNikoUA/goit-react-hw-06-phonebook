import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { Label } from './ContactForm.styled';
import { Input, BtnAddContact, ErrorMsg } from './ContactForm.styled';

const Schema = yup.object().shape({
  name: yup
    .string()
    .required('Required')
    .min(3, 'Name must be 3-25 characters long')
    .max(25, 'Name must be 3-25 characters long')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Enter valid symbols'
    ),
  number: yup
    .string()
    .required('Required')
    .min(6, 'Number must be 6-13 characters long')
    .max(13, 'Number must be 6-13 characters long')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Enter valid symbols'
    ),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        number: '',
        name: '',
      }}
      validationSchema={Schema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Input type="text" name="name" placeholder="Enter name..." />
          <ErrorMsg component="div" name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" placeholder="Enter number..." />
          <ErrorMsg component="div" name="number" />
        </Label>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </Form>
    </Formik>
  );
};
