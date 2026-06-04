import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCalendarCheck,
  faPlay,
  faStar,
  faMapMarkerAlt,
  faConciergeBell,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Hero.css";
import img1 from '../assets/banner.jpg';
import img2 from '../assets/banner1.jpg';
import img3 from '../assets/r4.jpg';
import img4 from '../assets/banner3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img1,
      alt: "  home stay Exterior",
    },
    {
      image: img2,
      alt: " outside view",
    },
    {
      image: img4,
      alt: " Interior",
    },
    {
      image: img3,
      alt: " Room",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      if (direction === 1) {
        return (prev + 1) % slides.length;
      } else {
        return prev === 0 ? slides.length - 1 : prev - 1;
      }
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // const openBookingModal = () => {
  //   document.getElementById("bookingModal").classList.add("active");
  // };

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.alt} />
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="container">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="title-accent">Welcome to</span>
            <span className="title-main">StayNest</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover comfortable accommodations, modern amenities, and memorable
            experiences. Whether you're planning a relaxing getaway, family
            vacation, or weekend retreat, find the perfect place to stay and feel
            at home.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <button className="btn-primary">
              <FontAwesomeIcon icon={faCalendarCheck} />
              Book Your Stay
            </button>

            <button className="btn-secondary" onClick={scrollToAbout}>
              <FontAwesomeIcon icon={faPlay} />
              Explore Property
            </button>
          </motion.div>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="feature-item">
              <FontAwesomeIcon icon={faStar} />
              <span>Top-Rated Stay</span>
            </div>

            <div className="feature-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Great Location</span>
            </div>

            <div className="feature-item">
              <FontAwesomeIcon icon={faConciergeBell} />
              <span>Guest Support</span>
            </div>
          </motion.div>
        </div>
      </div>


      <div className="hero-controls">
        <button className="hero-prev" onClick={() => changeSlide(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="hero-next" onClick={() => changeSlide(1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
