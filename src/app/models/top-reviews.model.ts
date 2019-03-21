export interface TopReviews {
  network: string;
  reviews: Review[];
}

export interface Review {
  username: string;
  review: string;
}
