import React from 'react';
import ContactAccordion from './ContactAccordion';
import ContactForm from './ContactFrom';
import './Contact.css';

const Contact = () => (
  <section className="contact">
    <h2 className="sub-heading">_contact-me</h2>
    <ContactAccordion />

    <ContactForm />
  </section>
);

export default Contact;
