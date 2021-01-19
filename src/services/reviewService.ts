import data from "./data/reviewSummary.json";
import Review from "../models/Review";

export const getReviewSummary = async (): Promise<Review[]> => {
  const promise = new Promise<Review[]>((resolve, reject) => {
    if (data) {
      setTimeout(() => {
        const reviewList = data.data.map((data) => new Review(data));
        resolve(reviewList);
      }, 1000);
    } else {
      console.log("error occured");
      reject("Cannot read file.");
    }
  });

  return promise;
};
