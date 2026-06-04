import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
    const phoneNumber = "91xxxxxxxxxx"; // replace with your number
    const message = "Hello, I want to know more about your hotel";

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="whatsapp-container">
            <button className="whatsapp-btn" onClick={handleClick}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                    alt="WhatsApp"
                    className="whatsapp-icon"
                />
            </button>
        </div>
    );
};

export default WhatsAppButton;