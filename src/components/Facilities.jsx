import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faConciergeBell,
  faClock,
  faDumbbell,
  faFire,
  faCar,
  faTv,
  faWifi,
  faMountain,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Facilities.css";

const Facilities = () => {
  const facilities = [
    {
      icon: faWifi,
      title: "Free Wi-Fi",
      description:
        "Reliable internet access throughout the property.",
    },
    {
      icon: faCar,
      title: "Parking Available",
      description:
        "Convenient parking facilities for guests.",
    },
    {
      icon: faConciergeBell,
      title: "Guest Support",
      description:
        "Friendly assistance whenever you need it.",
    },
    {
      icon: faClock,
      title: "Easy Check-In",
      description:
        "Simple and hassle-free arrival experience.",
    },
    {
      icon: faTv,
      title: "Modern Amenities",
      description:
        "Enjoy essential comforts designed for a relaxing stay.",
    },
    {
      icon: faFire,
      title: "Comfort & Relaxation",
      description:
        "A welcoming environment that feels like home.",
    },
  ];

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Amenities & Services</span>
          <h2 className="section-title">Everything You Need for a Comfortable Stay</h2>
          <p className="section-description">
            Discover thoughtfully selected amenities and services designed to enhance
            your experience, providing comfort, convenience, and a welcoming
            atmosphere throughout your stay.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="facility-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FontAwesomeIcon icon={facility.icon} />
              </div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
