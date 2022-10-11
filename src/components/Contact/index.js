import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_ahz5iig";
const TEMPLATE_ID = "template_zb9eoya";
const USER_ID = "6OX_BEPjn0TS8Fxqn";

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

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()
    }
  }

  return (
    <Container>
      <h1 className="my-2">Contact me</h1>
      <Form id="contact-form" onSubmit={handleSubmit}>

        <FormGroup>
          <Label htmlFor='user_name'>Name: </Label>
          <Input type="text" defaultValue={name} onBlur={handleChange} name='user_name'
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='user_email'>Email address: </Label>
          <Input type='email' defaultValue={email} onBlur={handleChange} name='user_email'
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='user_message'>Message:</Label>
          <Input
            id="messageText"
            type="textarea"
            name='user_message'
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