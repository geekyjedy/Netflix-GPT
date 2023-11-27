import React from "react";
import { POSTER_LINK } from "./constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 pr-4">
      <img alt="movie-poster" src={POSTER_LINK + posterPath} />
    </div>
  );
};

export default MovieCard;
