import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBars,
  faTimes,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // const openBookingModal = () => {
  //   document.getElementById("bookingModal").classList.add("active");
  // };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            {/* <span className="logo-text"> Homestay</span> */}
            <img src={logo} className="w-6 h-6" alt="Hello" />
          </div>

          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a
                href="#home"
                className="nav-link"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={() => scrollToSection("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#rooms"
                className="nav-link"
                onClick={() => scrollToSection("rooms")}
              >
                Rooms
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#facilities"
                className="nav-link"
                onClick={() => scrollToSection("facilities")}
              >
                Facilities
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#dining"
                className="nav-link"
                onClick={() => scrollToSection("dining")}
              >
                Dining
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#gallery"
                className="nav-link"
                onClick={() => scrollToSection("gallery")}
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <a href="tel:+91xxxxxxxxxx" className="btn-call">
              <FontAwesomeIcon icon={faPhone} />
              <span>Call Now</span>
            </a>
            <a
              href="https://booking.homestays.com/hotel/hotel-details?hotel_id=226"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-book">
                <FontAwesomeIcon icon={faCalendarCheck} />
                Book Now
              </button>
            </a>

          </div>

          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
