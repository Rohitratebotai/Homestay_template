import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./About.css";
import aboutimg from '../assets/r4.jpg';

const About = () => {
  const scrollToRooms = () => {
    document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Experience Comfort</span>
          <h2 className="section-title">Stay Where Memories Are Made</h2>
          <p className="section-description">
            Discover unique homestays designed to offer comfort, convenience,
            and authentic local experiences. Whether you're planning a family
            vacation, romantic getaway, or a peaceful retreat, our properties
            provide the perfect setting for every journey.
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Your Perfect Home Away From Home</h3>

              <p>
                Our homestay template is designed for hosts who want to showcase
                their property in the best possible way. Highlight your rooms,
                amenities, local attractions, and unique experiences while giving
                guests all the information they need to book with confidence.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <h4>Premium</h4>
                  <p>Accommodations</p>
                </div>

                <div className="stat-item">
                  <h4>24/7</h4>
                  <p>Guest Assistance</p>
                </div>

                <div className="stat-item">
                  <h4>Top Rated</h4>
                  <p>Guest Experience</p>
                </div>
              </div>

              <button className="btn-outline" onClick={scrollToRooms}>
                Explore Rooms
              </button>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={aboutimg} alt="Homestay Experience" />

              <div className="image-badge">
                <FontAwesomeIcon icon={faAward} />
                <span>Trusted Hospitality</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
