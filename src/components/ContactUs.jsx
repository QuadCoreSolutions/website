import React from 'react';
import styles from '../style';
import Button from './Button';

const ContactUs = () => {
  return (
    <section id="contact" className={`${styles.paddingY} flex flex-col md:flex-row justify-between items-start gap-10`}>
      {/* Left Side: Heading + Text */}
      <div className="flex-1">
        <h2 className={styles.heading2}>Let's Connect</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Got an idea, question, or looking for a reliable tech team? Drop us a message — we’re excited to collaborate!
        </p>
      </div>

      {/* Right Side: Form */}
      <form className="flex-1 w-full max-w-[500px] flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg bg-dimBlue text-white outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg bg-dimBlue text-white outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-4 rounded-lg bg-dimBlue text-white outline-none resize-none"
        />
        <div className="mt-4">
          <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
