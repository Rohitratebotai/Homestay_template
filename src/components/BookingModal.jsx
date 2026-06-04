import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./BookingModal.css";

const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    checkin: "",
    checkout: "",
    adults: "1",
    children: "0",
    roomType: "",
    name: "",
    email: "",
    phone: "",
    requests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission here
    console.log("Booking submitted:", formData);
    alert(
      "Thank you for your booking request! We will contact you shortly to confirm your reservation."
    );
    closeModal();
    setFormData({
      checkin: "",
      checkout: "",
      adults: "1",
      children: "0",
      roomType: "",
      name: "",
      email: "",
      phone: "",
      requests: "",
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    document.getElementById("bookingModal").classList.remove("active");
  };

  // Set up global function for opening modal
  React.useEffect(() => {
    window.openBookingModal = () => {
      setIsOpen(true);
      document.getElementById("bookingModal").classList.add("active");
    };
  }, []);

  return (
    <div id="bookingModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Make a Reservation</h2>
          <button className="close" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Check-in Date</label>
                <input
                  type="date"
                  name="checkin"
                  value={formData.checkin}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Check-out Date</label>
                <input
                  type="date"
                  name="checkout"
                  value={formData.checkout}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Adults</label>
                <select
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                </select>
              </div>
              <div className="form-group">
                <label>Children</label>
                <select
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                >
                  <option value="0">0 Children</option>
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3">3 Children</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Room Type</label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
              >
                <option value="">Select Room Type</option>
                <option value="deluxe">Deluxe Room - ₹5,000</option>
                <option value="premium">Premium Room - ₹6,000</option>
                <option value="suite">Suite Room - ₹7,000</option>
              </select>
            </div>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Special Requests</label>
              <textarea
                name="requests"
                rows="3"
                placeholder="Any special requirements..."
                value={formData.requests}
                onChange={handleChange}
              />
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
