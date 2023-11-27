import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContent=()=> {

  const movie = useSelector(store => store.movie)
  return (
    movie &&(

      <div className="py-5">
    <MovieList title={"Now Playing"} movie={movie.mostPopularMovie}/>
    <MovieList title={"Top Rated"} movie={movie.topRatedMovie}/>
    <MovieList title={"Upcoming Movies"} movie={movie.upComingMovie}/>
    <MovieList title={"Most Watched"} movie={movie.mostPopularMovie}/>
    </div>
      )

  );
}

export default MovieContent