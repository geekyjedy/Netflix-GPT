import { useDispatch } from "react-redux";
import { addMostPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../components/constant";


const usePopularMovies = ()=>{
    const dispatch = useDispatch();

  //-----fetching data from api
  const popularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();

    //---array of 20 movie list
    // console.log(json.results);

    //-----updating fetched data to redux store
    dispatch(addMostPopularMovie(json.results))
  }
  useEffect(()=>{
    popularMovies();
  },[])
}

export default usePopularMovies;