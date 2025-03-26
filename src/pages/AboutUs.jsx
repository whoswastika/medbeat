import React from 'react';
import './AboutUs.css';
// Import logos (replace with actual paths to your logo images)
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
// import logo2 from './assets/logo2.png';
// import logo3 from './assets/logo3.png';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        {/* Section 1: Who Are We? */}
        <div className="section">
          <div className="logo-container">
            <img src={logo1} alt="Who Are We Logo" />
          </div>
          <div className="content-container">
            {/* <h1 className="section-title">Who Are We?</h1> */}
            <p><strong>AHRx</strong>, the parent company of <strong>MedBeat HealthConnect brand</strong>, is a high quality medical care platform which uses AI in Healthcare.</p>
            <p><strong>MedBeat HealthConnect</strong> aims to narrow down probable diagnosis by intelligently asking relevant questionnaire in a language that the patient is comfortable in, creates medical history for the prescriber in English, directs and recommends the right specialist along with lab investigations. It aspires to provide non-pharmacological therapy for proactive lifestyle for a healthy life in an expeditised manner.</p>
          </div>
        </div>

        {/* Section 2: Backed By Research */}
        <div className="section">
          <div className="logo-container w-full">
            <img src={logo2} alt="Research Logo" />
          </div>
          <div className="content-container ">
            {/* <h2 className="section-subtitle">Backed By Research from Senior Medical Professionals</h2> */}
            <p>Dr. Raju is the Co-Founder and Chief Evangelist for AHRX. She is an MD with over two decades of post qualification experience in teaching, research and clinical trials. She worked with Maulena Azad Medical College for over a decade, before stepping down in 2018 to focus on research. This led to creating a one-of-a-kind robust healthcare platform.</p>
          </div>
        </div>

        {/* Section 3: Digital Avatar */}
        <div className="section">
          <div className="logo-container">
            <img src={logo3} alt="Digital Avatar Logo" />
          </div>
          <div className="content-container">
            {/* <h2 className="section-subtitle">Digital Avatar of a Junior Doctor</h2> */}
            <p>Powered by AI, MedBeat HealthConnect is typically the Digital Avatar of a Junior Doctor, taking down symptoms, asking relevant questions and taking in-depth medical history that a normal medical care professional is unable to, due to the sheer volume of patients and paucity of time.</p>
            <p>Backed by her own experience in hospitals, Dr. Monika Agarwal understands the criticality of this information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;