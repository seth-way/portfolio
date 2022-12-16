import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { main } from '../Resources/personalInfo';

const Contact = () => {
  const { name, contactMessage, phone, address } = main;
  const { city, state, zip } = address;
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: '',
  });

  const [formSubmitted, submit] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    const service_id = 'service_v3pukjc';
    const template_id = 'contact_us';

    var params = {
      contactName: formData.contactName,
      contactEmail: formData.contactEmail,
      contactSubject: formData.contactSubject,
      contactMessage: formData.contactMessage,
    };

    emailjs.send(service_id, template_id, params).then(
      () => {
        submit(true);
      },
      function (err) {
        alert('Send email failed!\r\n Response:\n ' + JSON.stringify(err));
      }
    );

    e.preventDefault();
  };

  useEffect(() => {
    emailjs.init('user_pB5iiwdQB3NQx9EcvTMPY');
  }, []);

  const renderFormSubmitted = () => (
    <section>
      <div className='row banner banner-text'>
        <h3>
          Thank you for reaching out! I do my best to read and respond to email
          submissions as quickly as possible.
        </h3>
      </div>
    </section>
  );

  const renderForm = () => (
    <section id='contact'>
      <div className='row section-head'>
        <div className='two columns header-col'>
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        <div className='ten columns'>
          <p className='lead'>{contactMessage}</p>
        </div>
      </div>
      <div className='row'>
        <div className='eight columns'>
          <form
            action=''
            method='post'
            id='contactForm'
            name='contactForm'
            onSubmit={handleSubmit}
          >
            <fieldset>
              <div>
                <label htmlFor='contactName'>
                  Name <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  defaultValue=''
                  size='35'
                  id='contactName'
                  name='contactName'
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='contactEmail'>
                  Email <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  defaultValue=''
                  size='35'
                  id='contactEmail'
                  name='contactEmail'
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='contactSubject'>Subject</label>
                <input
                  type='text'
                  defaultValue=''
                  size='35'
                  id='contactSubject'
                  name='contactSubject'
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='contactMessage'>
                  Message <span className='required'>*</span>
                </label>
                <textarea
                  cols='50'
                  rows='15'
                  id='contactMessage'
                  name='contactMessage'
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <button className='submit'>Submit</button>
                <span id='image-loader'>
                  <img alt='' src='images/loader.gif' />
                </span>
              </div>
            </fieldset>
          </form>
          <div id='message-warning'> Error boy</div>
          <div id='message-success'>
            <i className='fa fa-check'></i>Your message was sent, thank you!
            <br />
          </div>
        </div>
        <aside className='four columns footer-widgets'>
          <div className='widget widget_contact'>
            <h4>Address and Phone</h4>
            <p className='address'>
              {name}
              <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );

  return (
    <section id='contact'>
      {formSubmitted ? renderFormSubmitted() : renderForm()}
    </section>
  );
};

export default Contact;
