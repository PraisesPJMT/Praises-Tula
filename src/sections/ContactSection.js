import React, { useState } from 'react';
import { format } from 'fecha';
import '../components/contact/Contact.css';

const ContactSection = () => {
  const initialState = { name: '', email: '', message: '' };
  const [formState, setFormState] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialState);
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
    } else if (values.email && !regex.test(values.email)) {
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
    setFormErrors({ ...formErrors, [name]: '' });
    setValidEmail(regex.test(formState.email));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateValues(formState));
    setValidEmail(regex.test(formState.email));
    if (!formErrors.name && !formErrors.email && !formErrors.message) {
      fetch('https://getform.io/f/b7b925e8-c2b3-4910-9af9-a635bb3c3378', {
        method: 'POST',
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          const { status } = response;
          if (status === 200) setSuccess(true);
        })
        // eslint-disable-next-line no-console
        .catch(() => setSuccess(false));
    }
  };

  const resetForm = () => {
    setFormState(initialState);
    setFormErrors({});
    setValidEmail(false);
    setSuccess(false);
  };

  const ContactForm = () => (
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
              <input type="text" placeholder="John Doe" name="name" value={formState.name} id="name" className="input" onChange={handleChange} />
              { formState.name.length <= 0 ? (<span className="error">{ formErrors.name }</span>) : ''}
            </label>
          </div>
          <div className="field">
            <label htmlFor="email">
              _email:
              <input type="text" placeholder="example@email.com" name="email" value={formState.email} id="email" className="input" onChange={handleChange} />
              { (formState.email.length <= 0 || !validEmail) ? (<span className="error">{ formErrors.email }</span>) : ''}
            </label>
          </div>
          <div className="field">
            <label htmlFor="message">
              _message:
              <textarea name="message" placeholder="Come work for us." value={formState.message} id="message" className="input" rows="7" onChange={handleChange} />
              { formState.message.length <= 0 ? (<span className="error">{ formErrors.message }</span>) : ''}
            </label>
          </div>
          <div>
            <button type="submit" name="submit" className="btn send-btn">send-message</button>
          </div>
        </form>
      ) }
    </>
  );

  return (
    <section id="contact">
      <h2 className="section-title">_contact-me</h2>
      <div className="contact">
        <article>
          { ContactForm() }
        </article>
        <aside>
          <h3 className="sub-heading2">
            <span className="text">
              <span className="mono"> &frasl; &frasl; </span>
              contact-me code_snippet
            </span>
          </h3>
          <div className="snippet">
            <p className="code">
              <span className="orange">const </span>
              <span className="purple">button</span>
              {' = '}
              <span className="purple">document</span>
              <span className="normal">.</span>
              <span className="purple">querySelector</span>
              <span className="normal">(</span>
              <span className="green">&apos;#sendBtn&apos;</span>
              <span className="normal">);</span>
            </p>
            <p className="code">
              <span className="orange">const </span>
              <span className="purple">form</span>
              {' = '}
              <span className="purple">document</span>
              <span className="normal">.</span>
              <span className="purple">querySelector</span>
              <span className="normal">(</span>
              <span className="green">&apos;#form&apos;</span>
              <span className="normal">);</span>
            </p>
            <br />
            <p className="code">
              <span className="orange">const </span>
              <span className="purple">message</span>
              {' = { '}
            </p>
            <div className="code-body">
              <p className="normal">
                <span className="orange">name</span>
                <span className="normal">:</span>
                <span className="green">
                  &apos;
                  {formState.name}
                  &apos;
                </span>
                ,
              </p>
              <p className="normal">
                <span className="orange">email</span>
                <span className="normal">:</span>
                <span className="green">
                  &apos;
                  {formState.email}
                  &apos;
                </span>
                ,
              </p>
              <p className="normal">
                <span className="orange">message</span>
                <span className="normal">:</span>
                <span className="green">
                  &apos;
                  {formState.message}
                  &apos;
                </span>
                ,
              </p>
              <p className="normal">
                <span className="orange">date</span>
                <span className="normal">:</span>
                <span className="green">
                  &apos;
                  {format(new Date(), 'dddd MMMM Do, YYYY')}
                  &apos;
                </span>
                ,
              </p>
            </div>
            <p className="code-end">{'};'}</p>
            <br />
            <p className="code">
              <span className="purple">button</span>
              <span className="normal">.</span>
              <span className="purple">addEventListener</span>
              <span className="normal">(</span>
              <span className="green">&apos;click&apos;</span>
              <span className="normal">{', () => {'}</span>
            </p>
            <div className="code-body">
              <p className="code">
                <span className="purple">form</span>
                <span className="normal">.</span>
                <span className="purple">send</span>
                <span className="normal">(</span>
                <span className="purple">message</span>
                <span className="normal">);</span>
              </p>
            </div>
            <p className="code-end">{'});'}</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactSection;
