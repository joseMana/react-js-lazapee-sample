import { v4 } from "uuid";

export default class Review {
  id: string;
  username: string;
  review: string;
  rating: number;

  constructor(review: any = { username: "", review: "", rating: 0 }) {
    this.id = v4();
    this.username = review.username;
    this.review = review.review;
    this.rating = review.rating;
  }
}
