import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
// import { useSelector } from 'react-redux';


const GptSearch = () => {

  // const onGpt = useSelector(store=>store.gpt.showGptSearch)
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        ></img>
      </div>
    <GptSearchBar/>
    <GptMovieSuggestion/>
    </div>
  )
}



export default GptSearch