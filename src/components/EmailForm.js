import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import style from './../styles/EmailForm.module.css'
import { useState } from 'react';

const EmailForm = () => {
  const [sendMsg,setSendMsg] = useState('Send');
  const form = useRef();
  const email_public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const email_service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const email_template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const sendEmail = (e) => {
    e.preventDefault();
    setSendMsg('Sending mail');
    emailjs.sendForm(`${email_service_id}`, `${email_template_id}`, form.current, `${email_public_key}`)
    .then(() => {
        setSendMsg('Succese!');
        for(let i = 0; i < 4; i++) {
          form.current[i].value = '';
        }
        setTimeout(()=>{
          setSendMsg('Send');
        }, 2000);
      }, () => {
          setSendMsg('Failed..');
          setTimeout(()=>{
            setSendMsg('Send');
          },2000);
      });
  };

  return (
    <>
      <form ref={form} autoComplete="off" onSubmit={sendEmail}>
        <h2 className={style.emailform_title}>Send Email 📨</h2>
        <p className={style.emailform_subtitle}><em>메일을 보내주시면, 평일 기준 3일 이내에 답장드릴게요!</em></p>
        <div className={style.emailform_wrap}>
          <div className={`${style.emailform_item}`}>
            <div className={style.form_wrap}>
              <label>Name</label>
              <input type="text" name="name" required/>
            </div>
            <div className={style.form_wrap}>
              <label>Email</label>
              <input type="email" name="email" required/>
            </div>
            <div className={style.form_wrap}>
              <label>Subject</label>
              <input type="text" name="subject" required/>
            </div>

          </div>
          <div className={`${style.emailform_item}`}>
            <div className={`${style.form_wrap} ${style.form_wrap_msg}`}>
              <label>Message</label>
              <textarea name="message" required/>
            </div>
            <input type="submit" value={sendMsg}/>
          </div>
        </div>
      </form>
    </>
  );
};

export default EmailForm;