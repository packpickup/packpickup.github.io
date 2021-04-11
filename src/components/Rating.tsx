import "./Rating.scss";

import { FunctionComponent } from "react";

type Props = {
  rating: number;
};

export const Rating: FunctionComponent<Props> = ({ rating }) => {
  return (
    <span className="rating-stars">
      {[...Array(rating)].map((_, i) => "★")}
      {[...Array(5 - rating)].map((_, i) => "☆")}
    </span>
  );
};
