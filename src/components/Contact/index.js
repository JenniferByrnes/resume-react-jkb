import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Container, Card, Form, Input, Button, Row } from 'reactstrap';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

// import { faHome } from "@fortawesome/free-regular-svg-icons";
import { faUser, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <Row className="flex-wrap justify-center">

        {/* <Card>
          <CardText tag="h3"  className="m-4" style={{ color: "var(--primary)" }} >Let's work on web solutions together!  Drop me a line!</CardText>
        </Card> */}
        <Card style={{ maxWidth: '30rem' }} className="p-2 m-4">
          <Form id="contact-form" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ backgroundColor: "var(--secondary)" }}>
                  <h3><FontAwesomeIcon icon={faUser} style={{ color: "var(--primary)" }} /></h3>
                </span>
              </div>
              <Input type="text" defaultValue={name} onBlur={handleChange} name='user_name'
                icon="user circle"
                iconPosition="left"
                placeholder="Name"
                style={{ color: "var(--primary)" }}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ backgroundColor: "var(--secondary)" }}>
                  <h3><FontAwesomeIcon icon={faEnvelope} style={{ color: "var(--primary)" }} /></h3>
                </span>
              </div>
              <Input type='email' defaultValue={email} onBlur={handleChange} name='user_email'
                icon="mail"
                iconPosition="left"
                placeholder="Email"
                style={{ color: "var(--primary)" }}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ backgroundColor: "var(--secondary)" }}>
                  <h3><FontAwesomeIcon icon={faMessage} style={{ color: "var(--primary)" }} /></h3>
                </span>
              </div>
              <Input
                id="messageText"
                type="textarea"
                name='user_message'
                defaultValue={message}
                onBlur={handleChange}
                rows="5"
                placeholder="Message"
                style={{ color: "var(--primary)" }}
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text" style={{ color: "var(--primary)" }}>{errorMessage}</p>
              </div>
            )}
            <div className="flex-wrap justify-center row">
              <Button type="submit" style={{ color: "var(--light)", backgroundColor: "var(--primary)", maxWidth: '9rem' }} >Submit</Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Container>
  );
}

export default ContactForm;