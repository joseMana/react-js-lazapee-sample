import React, { useState } from "react";
import useReview from "../hooks/useReview";
import Review from "../models/Review";
import ReviewPost from "./ReviewPost";

const reviewList: Review[] = [
  new Review({ username: "Leonard", rating: 5, review: "Awesome!" }),
  new Review({ username: "Penny", rating: 5, review: "Great!" }),
  new Review({ username: "Sheldon", rating: 3, review: "Nice!" }),
  new Review({ username: "Raj", rating: 2, review: "Thank you, Lazapee!" }),
];

function ReviewSection() {
  const [newReview, setNewReview] = useState<Review>(new Review());

  const { newReviewList, avgRating, addReview, removeReview } = useReview();

  function handleUsernameChange(e: React.FormEvent<HTMLInputElement>) {
    setNewReview({ ...newReview, username: e.currentTarget.value });
  }

  function handleReviewChange(e: React.FormEvent<HTMLInputElement>) {
    setNewReview({ ...newReview, review: e.currentTarget.value });
  }

  function handleRatingChange(e: React.FormEvent<HTMLInputElement>) {
    setNewReview({ ...newReview, rating: +e.currentTarget.value });
  }

  function handleAddReview() {
    addReview(newReview);
  }

  function handleDeleteReview(id: string) {
    removeReview(id);
  }

  return (
    <div>
      <div>
        <p>Reviews:</p>
        <label>User Name:</label>
        <input
          type="text"
          value={newReview.username}
          onChange={handleUsernameChange}
        />
        <br />
        <label>Review: </label>
        <input
          type="text"
          value={newReview.review}
          onChange={handleReviewChange}
        />
        <br />
        <label>Rating: </label>
        <input
          type="text"
          value={newReview.rating}
          onChange={handleRatingChange}
        />
        <br />
        <button onClick={handleAddReview}>Add Review</button>
        <br />
      </div>
      <div>
        <span>Average Rating:{avgRating}</span>
        {
          newReviewList.map((r: Review) => {
            return (
              <ReviewPost
                key={r.id}
                review={r}
                onDeleteReview={handleDeleteReview}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default ReviewSection;
