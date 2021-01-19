import React from "react";
import "./App.css";
import image from "./assets/images/amazing_toy.jpg";
import logo from "./assets/images/logo.png";
import ReviewSection from "./components/ReviewSection";
import useReview from "./hooks/useReview";

function MyApp() {
  const { avgRating } = useReview();
  return (
    <div className="App">
      <div>
        <img src={logo} alt="logo" className="App-logo" />
        <br />
        <img src={image} alt="amazing_toy" />
        <h5>[Authentic] Revengers - Incredible Fella</h5>
        <span>P150.00</span>
        <br />
        <span>Average Rating:{avgRating}</span>
      </div>
      <ReviewSection />
    </div>
  );
}

export default MyApp;
