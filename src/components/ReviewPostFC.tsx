import React, { Fragment, useState, FC } from "react";

type Props = {
  username: string;
  review: string;
  rating: number;
};

const ReviewPostFC: FC<Props> = (props) => {
  const [updatedRating, setUpdatedRating] = useState(props.rating);
  function addRating() {
    setUpdatedRating(updatedRating + 1);
  }
  return (
    <>
      <p>User Name: {props.username}</p>
      <p>Review: {props.review}</p>
      <p>Rating: {updatedRating}</p>
      <button onClick={addRating}>Add Rating</button>
    </>
  );
};

export default ReviewPostFC;
