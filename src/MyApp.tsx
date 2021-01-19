import React from "react";
import "./App.css";
import image from "./assets/images/amazing_toy.jpg";
import logo from "./assets/images/logo.png";
import ReviewPost from "./components/ReviewPost";
import ReviewPostFC from "./components/ReviewPostFC";
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
      {/* <div>
        <div>
          <p>Reviews:</p>
          <label>User Name:</label>
          <input type="text" />
          <br />
          <label>Review: </label>
          <input type="text" />
          <br />
          <label>Rating: </label>
          <input type="text" />
          <br />
          <button>Add Review</button>
          <br />
        </div>
        <div>
          <ReviewPost username="Leonard" rating={5} review="Awesome!" />
          <ReviewPost username="Sheldon" rating={5} review="Great!" />
          <ReviewPostFC
            username="Penny"
            rating={2}
            review="Thank you, Lazapee!"
          />
          <ReviewPost />
          <a
            href=""
            onClick={(e) => {
              console.log("The link was clicked.");
              // it prevents browser refresh; similar to return false in html
              e.preventDefault();
            }}
          >
            Click me
          </a>
        </div>
      </div> */}
      <ReviewSection />
    </div>
  );
}

export default MyApp;
