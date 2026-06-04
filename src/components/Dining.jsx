import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faClock,
  faWineGlass,
  faWifi,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./Dining.css";
import img from '../assets/d1.jpg';

const Dining = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="dining" className="dining">
      <div className="container">
        <div className="dining-content">
          <div className="dining-text">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">Designed for Comfortable Stays</h2>

            <p>
              Our property combines modern amenities, welcoming spaces, and attentive
              service to create an enjoyable stay for every guest. Experience comfort,
              convenience, and genuine hospitality throughout your visit.
            </p>

            <div className="dining-features">
              <div className="feature">
                <FontAwesomeIcon icon={faWifi} />
                <span>Modern Amenities</span>
              </div>

              <div className="feature">
                <FontAwesomeIcon icon={faClock} />
                <span>Easy Booking</span>
              </div>

              <div className="feature">
                <FontAwesomeIcon icon={faStar} />
                <span>Exceptional Guest Experience</span>
              </div>
            </div>

            <button className="btn-outline" onClick={scrollToContact}>
              Get In Touch
            </button>
          </div>

          <div className="dining-image">
            <img src={img} alt="Comfortable Stay" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
