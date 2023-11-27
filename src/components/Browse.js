import Header from "./Header";
import usePopularMovies from "../customHook/usePopularMovies";
import MovieContent from "./MovieContent";
import useTopRated from "../customHook/useTopRated"
import useUpComing from "../customHook/useUpcoming";

const Browse = () => {

  usePopularMovies(); 
  useTopRated();
  useUpComing();

  return (
    <div>
      <Header/>
      <MovieContent/>
    </div>
  );
};

export default Browse;
