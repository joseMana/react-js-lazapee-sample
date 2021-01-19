import React, { useEffect, useState } from "react";
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
  // local state that will be manipulated by the Add Review form
  const [newReview, setNewReview] = useState<Review>(new Review());

  // associated local states on each input textbox
  //   const [newUserName, setNewUserName] = useState<string>("");
  //   const [newReviewStr, setNewReviewStr] = useState<string>("");
  //   const [newRating, setNewRating] = useState<number>(0);

  //const [newReviewList, setNewReviewList] = useState<Review[]>(reviewList);

  const { newReviewList, avgRating, addReview, removeReview } = useReview();

  //   const [avgRating, setAvgRating] = useState<number>(0);

  //   useEffect(() => {
  //     const computedRating =
  //       newReviewList
  //         .map((r: Review) => r.rating)
  //         .reduce((prev, curr) => prev + curr) / newReviewList.length;
  //     setAvgRating(computedRating);
  //   }, [newReviewList]);

  // need to associate handlers to reflect the inputted text on the input textbox
  function handleUsernameChange(e: React.FormEvent<HTMLInputElement>) {
    //setNewUserName(e.currentTarget.value);
    setNewReview({ ...newReview, username: e.currentTarget.value });
  }

  function handleReviewChange(e: React.FormEvent<HTMLInputElement>) {
    //setNewReviewStr(e.currentTarget.value);
    setNewReview({ ...newReview, review: e.currentTarget.value });
  }

  function handleRatingChange(e: React.FormEvent<HTMLInputElement>) {
    //setNewRating(+e.currentTarget.value);
    setNewReview({ ...newReview, rating: +e.currentTarget.value });
  }

  function handleAddReview() {
    // const newReviewObj = new Review({
    //   username: newUserName,
    //   rating: newRating,
    //   review: newReviewStr,
    // });
    //setNewReviewList([...newReviewList, newReviewObj]);
    //setNewReviewList([...newReviewList, newReview]);
    addReview(newReview);
  }

  function handleDeleteReview(id: string) {
    //const reviewListCopy = [...newReviewList];
    //const reviewIdx = reviewListCopy.findIndex((r: Review) => r.id === id);
    //reviewListCopy.splice(reviewIdx, 1);
    //setNewReviewList(reviewListCopy);
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
          // it returns a ReviewPost list that renders each data in the reviewList
          //   reviewList.map((r: Review) => {
          //     return (
          //       <ReviewPost
          //         key={r.id}
          //         username={r.username}
          //         rating={r.rating}
          //         review={r.review}
          //       />
          //     );
          //   })
          newReviewList.map((r: Review) => {
            return (
              <ReviewPost
                key={r.id}
                // username={r.username}
                // rating={r.rating}
                // review={r.review}
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
