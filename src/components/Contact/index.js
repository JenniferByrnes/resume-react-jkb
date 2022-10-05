import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


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
        setErrorMessage(`${e.target.name} is required.`);
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
    <section>
      <h1 data-testid={"contact-me"}>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="name">Name: </label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div className="my-2">
          <label htmlFor="email">Email address: </label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div className="my-2">
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;