import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';

const Contact = ({ texts }) => {
  const [state, handleSubmit] = useForm("movyagrn"); // Formspree ID provided by user
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    await handleSubmit(event);
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessPopup(true);
      // Optionally hide popup after a few seconds
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="section contact-section reveal">
      <div className="section-content blurred-container">
        <h2 className="contact-title reveal animate-fade-up delay-1">{texts.contactTitle}</h2>
        <p className="contact-desc reveal animate-fade-up delay-2">{texts.contactDesc}</p>
        
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="form-group reveal animate-fade-up delay-3">
            <label htmlFor="name">{texts.formNameLabel}</label>
            <input type="text" id="name" name="name" required />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>
          
          <div className="form-group reveal animate-fade-up delay-4">
            <label htmlFor="email">{texts.formEmailLabel}</label>
            <input type="email" id="email" name="email" required />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          
          <div className="form-group reveal animate-fade-up delay-5">
            <label htmlFor="message">{texts.formMessageLabel}</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          
          <div className="form-group reveal animate-fade-up delay-6">
            <ReCAPTCHA
              sitekey="6Lf3OQgsAAAAAHb3RcOnjOTfpN0o_smvkG81crky" // PROVIDED BY USER
              onChange={onRecaptchaChange}
            />
            <ValidationError 
              field="recaptcha"
              errors={state.errors}
            />
          </div>
          
          <button type="submit" className="submit-button reveal animate-fade-up delay-7" disabled={state.submitting || !recaptchaValue}>
            {texts.formSubmitButton}
          </button>
        </form>

        {showSuccessPopup && (
          <div className="success-popup">
            <div className="checkmark-circle">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark-circle-path" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
            <p>{texts.formSuccessMessage}</p>
            <button onClick={() => setShowSuccessPopup(false)} className="close-popup-button">X</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
