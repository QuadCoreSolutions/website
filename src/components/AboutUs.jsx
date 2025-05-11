import React from 'react';
import styles, { layout } from '../style';

const AboutUs = () => {
  return (
    <section id="about" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Who We Are</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          QuadCore Solutions is a passionate team of tech enthusiasts focused on solving real-world problems with modern technologies.
          Though we're a new name in the industry, our commitment to quality, innovation, and client success speaks volumes.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We specialize in building scalable digital solutions for startups and growing businesses, using AI, automation, and cutting-edge tools.
        </p>
      </div>
      <div className={layout.sectionImg}>
        {/* Replace this with your actual image asset */}
        <img
          src="https://via.placeholder.com/400x300"
          alt="About QuadCore"
          className="w-[100%] h-[100%] object-contain rounded-[10px]"
        />
      </div>
    </section>
  );
};

export default AboutUs;
