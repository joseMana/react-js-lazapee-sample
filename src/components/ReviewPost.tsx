import React, { Fragment, useEffect, useState } from "react";
import Review from "../models/Review";

type Props = {
  review: Review;
  onDeleteReview: (id: string) => void;
};

function ReviewPost(props: Props) {
  const [updatedRating, setUpdatedRating] = useState(props.review.rating);
  function addRating() {
    setUpdatedRating(updatedRating + 1);
  }

  function handleDeleteReview() {
    props.onDeleteReview(props.review.id);
  }

  useEffect(() => {
    console.log("Review added for " + props.review.username);
    return () => {
      console.log("Review deleted for " + props.review.username);
    };
  }, []);

  return (
    <>
      <p>User Name: {props.review.username}</p>
      <p>Review: {props.review.review}</p>
      <p>Rating: {updatedRating}</p>
      <button onClick={addRating}>Add Rating</button>
      <button onClick={handleDeleteReview}>Delete</button>
    </>
  );
}

ReviewPost.defaultProps = {
  username: "default",
  review: "default",
  rating: 0,
};

export default ReviewPost;
