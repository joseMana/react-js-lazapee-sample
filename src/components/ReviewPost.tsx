import React, { Fragment, useEffect, useState } from "react";
import Review from "../models/Review";

type Props = {
  // username: string;
  // review: string;
  // rating: number;
  review: Review;
  onDeleteReview: (id: string) => void;
};

function ReviewPost(props: Props) {
  // assigns props.rating to the updatedRating
  // setUpdatedRating is the one who raises React to r-render upon updatedRating change
  const [updatedRating, setUpdatedRating] = useState(props.review.rating);
  function addRating() {
    setUpdatedRating(updatedRating + 1);
  }

  function handleDeleteReview() {
    props.onDeleteReview(props.review.id);
  }

  // it is being run every first and re-render of the component
  // useEffect(() => {
  //   setUpdatedRating(updatedRating + 1);
  // });
  // it is being run every first render of the component
  // useEffect(() => {
  //   setUpdatedRating(updatedRating + 1);
  // }, []);
  // is is being run every updatedRating state change
  // useEffect(() => {
  //   console.log("Rating has been updated for " + props.review.username);
  //   console.log(updatedRating);
  // }, [updatedRating]);
  // mount and unmount
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
