import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Gallery.css";
import img1 from '../assets/banner.jpg'
import img2 from '../assets/banner1.jpg'
import img3 from '../assets/banner2.jpg'
import img4 from '../assets/banner3.jpg'
import img5 from '../assets/r1.jpg'
import img6 from '../assets/r2.jpg'
import img7 from '../assets/d1.jpg'
import img8 from '../assets/r4.jpg'
import img9 from '../assets/r5.jpg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: img1,
      alt: " Exterior",
    },
    {
      src: img2,
      alt: " Interior",
    },
    {
      src: img3,
      alt: " Room",
    },
    {
      src: img4,
      alt: " Facilities",
    },
    {
      src: img5,
      alt: " Suite",
    },
    {
      src: img6,
      alt: " Pool",
    },
    {
      src: img7,
      alt: " Restaurant",
    },
    {
      src: img8,
      alt: " Spa",
    },
    {
      src: img9,
      alt: " Room",
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Visual Journey</span>
          <h2 className="section-title"> Gallery</h2>
          <p className="section-description">
            Take a visual tour of our beautiful  and premium amenities.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <FontAwesomeIcon icon={faSearchPlus} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="lightbox-close" onClick={closeLightbox}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="lightbox-title">{selectedImage.title}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
