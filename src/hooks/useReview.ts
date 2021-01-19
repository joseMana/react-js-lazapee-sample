import { useEffect, useState } from "react";
import Review from "../models/Review";

const reviewList: Review[] = [
  new Review({ username: "Leonard", rating: 5, review: "Awesome!" }),
  new Review({ username: "Penny", rating: 5, review: "Great!" }),
  new Review({ username: "Sheldon", rating: 3, review: "Nice!" }),
  new Review({ username: "Raj", rating: 2, review: "Thank you, Lazapee!" }),
];

const useReview = () => {
  const [newReviewList, setNewReviewList] = useState<Review[]>(reviewList);

  const [avgRating, setAvgRating] = useState<number>(0);

  useEffect(() => {
    const computedRating =
      newReviewList
        .map((r: Review) => r.rating)
        .reduce((prev, curr) => prev + curr) / newReviewList.length;
    setAvgRating(computedRating);
  }, [newReviewList]);

  return {
    newReviewList,
    avgRating,
    addReview(newReview: Review) {
      setNewReviewList([...newReviewList, newReview]);
    },
    removeReview(id: string) {
      const reviewListCopy = [...newReviewList];
      const reviewIdx = reviewListCopy.findIndex((r: Review) => r.id === id);
      reviewListCopy.splice(reviewIdx, 1);
      setNewReviewList(reviewListCopy);
    },
  };
};

export default useReview;
