import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const form = useRef();
  const email_public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const email_service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const email_template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${email_service_id}`, `${email_template_id}`, form.current, `${email_public_key}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailForm;