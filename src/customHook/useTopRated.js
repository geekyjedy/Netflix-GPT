import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../components/constant";


const useTopRated = ()=>{
    const dispatch = useDispatch();

  //-----fetching data from api
  const topRated = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
    const json = await data.json();

    //---array of 20 movie list
    // console.log(json.results);

    //-----updating fetched data to redux store
    dispatch(addTopRatedMovie(json.results))
  }
  useEffect(()=>{
    topRated();
  },[])
}

export default useTopRated;