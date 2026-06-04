import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faSnowflake,
  faWifi,
  faTv,
  faCar,
  faConciergeBell,
  faBath,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Rooms.css";
import room1 from '../assets/r1.jpg';
import room2 from '../assets/r2.jpg'
import room3 from '../assets/r3.jpg'
const Rooms = () => {
  const rooms = [
    {
      id: "room-1",
      title: "Luxury Cottage",
      price: "Starting from ₹4,999",
      image: room1,
      description:
        "Experience comfort and privacy in a beautifully designed space with modern amenities and relaxing surroundings.",
      badge: "Featured",
      amenities: [
        { icon: faSnowflake, label: "Air Conditioning" },
        { icon: faWifi, label: "Free Wi-Fi" },
        { icon: faTv, label: "Smart TV" },
        { icon: faCar, label: "Free Parking" },
      ],
    },
    {
      id: "room-2",
      title: "Family Retreat",
      price: "Starting from ₹3,999",
      image: room2,
      description:
        "Ideal for families and groups, offering spacious interiors and all the essentials for a memorable stay.",
      badge: "Popular",
      amenities: [
        { icon: faSnowflake, label: "Air Conditioning" },
        { icon: faWifi, label: "Free Wi-Fi" },
        { icon: faTv, label: "Entertainment" },
        { icon: faConciergeBell, label: "Guest Service" },
      ],
    },
    {
      id: "room-3",
      title: "Cozy Escape",
      price: "Starting from ₹2,999",
      image: room3,
      description:
        "A comfortable and welcoming space perfect for couples, solo travelers, and weekend getaways.",
      badge: null,
      amenities: [
        { icon: faSnowflake, label: "Air Conditioning" },
        { icon: faWifi, label: "Free Wi-Fi" },
        { icon: faTv, label: "TV" },
        { icon: faBath, label: "Private Bathroom" },
      ],
    },
  ];

  const bookRoom = (roomType) => {
    // Set room type in booking modal
    // const modal = document.getElementById("bookingModal");
    const roomSelect = modal.querySelector('select[name="roomType"]');
    if (roomSelect) {
      roomSelect.value = roomType;
    }
    modal.classList.add("active");
  };

  return (
    <section id="rooms" className="rooms">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Featured Accommodations</span>
          <h2 className="section-title">Spaces Designed for Comfort and Relaxation</h2>
          <p className="section-description">
            From cozy retreats to spacious family stays, discover accommodations
            tailored to every travel style. Enjoy modern comforts, welcoming
            interiors, and a memorable experience throughout your stay.
          </p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="room-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="room-image">
                <img src={room.image} alt={room.title} />
                {room.badge && <div className="room-badge">{room.badge}</div>}
              </div>

              <div className="room-content">
                <div className="room-rating">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>

                {/* <h3 className="room-title">{room.title}</h3> */}
                <p className="room-description">{room.description}</p>

                <div className="room-amenities">
                  {room.amenities.map((amenity, i) => (
                    <span key={i}>
                      <FontAwesomeIcon icon={amenity.icon} />
                      {amenity.label}
                    </span>
                  ))}
                </div>

                {/* <div className="room-footer">
                  <div className="room-price">
                    <span className="price">{room.price}</span>
                    <span className="price-note">per night + GST</span>
                  </div>
                  <button
                    className="btn-book-room"
                    onClick={() => bookRoom(room.id)}
                  >
                    Book Now
                  </button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
