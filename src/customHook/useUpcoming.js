import { useDispatch } from "react-redux";
import { addUpComing } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../components/constant";


const useUpComing = ()=>{
    const dispatch = useDispatch();

  //-----fetching data from api
  const upcoming = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();

    //---array of 20 movie list
    // console.log(json.results);

    //-----updating fetched data to redux store
    dispatch(addUpComing(json.results))
  }
  useEffect(()=>{
    upcoming();
  },[])
}

export default useUpComing;