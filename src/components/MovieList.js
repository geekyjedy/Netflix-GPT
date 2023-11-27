import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  // console.log(movie[0].poster_path);
  return (
    <div className="px-5 bg-black py-14">
      <h2 className="text-2xl py-2 text-white ">{title}</h2>
      <div className="flex overflow-x-scroll">

      <div className="flex">
        {movie?.map(movie=><MovieCard key={movie.id} posterPath={movie.poster_path} />)}
      </div>
        
      </div>
    </div>
  );
};

export default MovieList;
