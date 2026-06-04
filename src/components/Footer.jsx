import React from "react";
import "./Footer.css";
import logo from '../assets/logo.png'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} className="w-4 h-4" alt="Logo" />
              <p>
                Luxury stays with serene mountain views and warm, personalized hospitality.
              </p>

              {/* 👉 ADD HERE */}
              <div className="footer-socials">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                  />
                </a>

                <a
                  href="https://www.facebook.com/ashok.chauhan.1426"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                    alt="Facebook"
                  />
                </a>
              </div>

            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#rooms" onClick={() => scrollToSection("rooms")}>
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  onClick={() => scrollToSection("facilities")}
                >
                  Facilities
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#dining" onClick={() => scrollToSection("dining")}>
                  Dining
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => scrollToSection("gallery")}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#banquet">Banquet</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#cancellation">Cancellation & Refunds</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()}  home stay. All Rights Reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://ratebotai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ratebot AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
