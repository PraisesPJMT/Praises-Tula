import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const initialState = { name: '', email: '', message: '' };
  const [formState, setFormState] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [validEmail, setValidEmail] = useState(false);
  const [success, setSuccess] = useState(false);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const validateValues = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name cannot be empty';
    }
    if (!values.email) {
      errors.email = 'Email cannot be empty';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email address';
    }
    if (!values.message) {
      errors.message = 'Message cannot be empty';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    setValidEmail(regex.test(formState.email));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateValues(formState));
    setValidEmail(regex.test(formState.email));
    setSuccess(true);
  };

  const resetForm = () => {
    setFormState(initialState);
    setFormErrors({});
    setValidEmail(false);
    setSuccess(false);
  };

  return (
    <>
      { Object.keys(formErrors).length === 0 && success ? (
        <div className="form-message">
          <h2 className="form-success-header">Thank you! 🤘</h2>
          <p>
            Thank you for reaching out! Your message has been received.
            <br />
            <br />
            {' '}
            You will receive a response really soon!
          </p>
          <div>
            <button type="button" name="new-message" className="btn send-new-btn" onClick={resetForm}>send-new-message</button>
          </div>
        </div>
      ) : (
        <form method="Post" id="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">
              _name:
              <input type="text" placeholder="John Doe" name="name" id="name" className="input" onChange={handleChange} />
              { success && formState.name.length <= 0 ? (<span className="error">{ formErrors.name }</span>) : ''}
            </label>
          </div>
          <div className="field">
            <label htmlFor="email">
              _email:
              <input type="text" placeholder="example@email.com" name="email" id="email" className="input" onChange={handleChange} />
              { success && (formState.email.length <= 0 || !validEmail) ? (<span className="error">{ formErrors.email }</span>) : ''}
            </label>
          </div>
          <div className="field">
            <label htmlFor="message">
              _message:
              <textarea name="message" placeholder="Come work for us" id="message" className="input" rows="7" onChange={handleChange} />
              { success && formState.message.length <= 0 ? (<span className="error">{ formErrors.message }</span>) : ''}
            </label>
          </div>
          <div>
            <button type="submit" name="submit" className="btn send-btn">send-message</button>
          </div>
        </form>
      ) }
    </>
  );
};

export default ContactForm;
