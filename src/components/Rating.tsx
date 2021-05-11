import "./Rating.scss";

import { FunctionComponent } from "react";

type Props = {
  rating: number;
};

export const Rating: FunctionComponent<Props> = ({ rating }) => {
  const rounded = Math.ceil(rating);
  return (
    <span className="rating-stars">
      {[...Array(rounded)].map((_, i) => "★")}
      {[...Array(5 - rounded)].map((_, i) => "☆")}
    </span>
  );
};
