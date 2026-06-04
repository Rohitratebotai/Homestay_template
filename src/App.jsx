import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Facilities from "./components/Facilities";
import Dining from "./components/Dining";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import "./App.css";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <WhatsAppButton />
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Rooms />
                <Facilities />
                <Dining />
                <Gallery />
                <Testimonials />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
        <BookingModal />
      </div>
    </Router>
  );
}

export default App;
