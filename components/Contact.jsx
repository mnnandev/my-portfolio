import React, { useState } from 'react';
import Reveal from '@/components/animations/Reveal';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(2, 'Please enter at least 2 characters')
        .required('Full name is required'),
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email is required'),
      message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch('https://formspree.io/f/xkndnzrg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log('Form submitted successfully');
          setIsSubmitted(true);
          resetForm();
          setTimeout(() => setIsSubmitted(false), 3000);
        } else {
          console.error('Error submitting form:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  });

  return (
    <>
      <article className="contact active" id="contact">
        <header>
          <Reveal>
            <h2 className="h2 article-title mt20">Contact</h2>
          </Reveal>
        </header>
        <section className="contact-form">
          <Reveal>
            <h3 className="h3 form-title">Contact Form</h3>
          </Reveal>

         

          <Reveal as="form" onSubmit={formik.handleSubmit} className="form">
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullname}
              />
              {/* Error Message for Fullname */}
              {formik.touched.fullname && formik.errors.fullname && (
                <p className="error">{formik.errors.fullname}</p>
              )}

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {/* Error Message for Email */}
              {formik.touched.email && formik.errors.email && (
                <p className="error">{formik.errors.email}</p>
              )}
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {/* Error Message for Message */}
            {formik.touched.message && formik.errors.message && (
              <p className="error">{formik.errors.message}</p>

            )}
             {/* Success Message */}
          {isSubmitted && (
            <div className="text-green-600 mb-4 p-3 rounded bg-green-100">
              Thank you! Your message has been submitted successfully.
            </div>
          )}

            <button className="form-btn anim-btn-lift" type="submit">
              <FaPaperPlane className="text-[#ffda6b] anim-btn-arrow" />
              <span>Send Message</span>
            </button>
          </Reveal>
        </section>
      </article>
    </>
  );
};

export default Contact;
