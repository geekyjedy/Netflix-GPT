import Header from "./Header";
import usePopularMovies from "../customHook/usePopularMovies";
import MovieContent from "./MovieContent";
import useTopRated from "../customHook/useTopRated"
import useUpComing from "../customHook/useUpcoming";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)

  usePopularMovies(); 
  useTopRated();
  useUpComing();

  return (
    <div>
      <Header/>
      {showGptSearch &&(

        <GptSearch/>
      )

      }
      {
        !showGptSearch &&(
          <>
          <MovieContent/>
          </>
        )
      }
    </div>
  );
};

export default Browse;
