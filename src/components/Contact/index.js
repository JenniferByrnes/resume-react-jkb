import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';


function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  }

  return (
    <Container>
      <h1 className="my-2">Contact me</h1>
      <Form id="contact-form" onSubmit={handleSubmit}>

        <FormGroup>
          <Label htmlFor="name">Name: </Label>
          <Input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email address: </Label>
          <Input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <Input
            id="messageText"
            type="textarea"
            name="message" 
            defaultValue={message} 
            onBlur={handleChange} 
            rows="5"
          />
        </FormGroup>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default ContactForm;