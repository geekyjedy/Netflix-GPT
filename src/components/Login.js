import { useRef, useState } from "react";
import Header from "./Header";
import { formValidate } from "../utils/validation";

const Login = () => {

  //--------useState for signin/ signup
  const [isSignUp,setIsSignUp] = useState(true);
  
  //-----useState for error message storing
  const [errMessage,setErrMessage] = useState(null);


  //-----useRef for getting reference of data from email and password fields
  const email = useRef(null);
  const password = useRef(null);


  //--------user login and signup function according to signin/signup
  const buttonClick = function(){
    const formValidMessage= formValidate(email.current.value,password.current.value);
    //email and password are objects(do console log both for more info)

    setErrMessage(formValidMessage)
  }

  //--------signin/signup form toggle function
  const checkIsSignUp = ()=>{
    setIsSignUp(!isSignUp);
  };
  return (
    <>
     <Header/>
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img"></img>
    </div>
    <form className="absolute m-36 p-12 bg-black w-3/12 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h3 className="font-bold text-xl">{isSignUp?"Sign in": "Sign Up"}</h3>
        {!isSignUp &&(
          <input type="text" placeholder="Full Name" className=" focus:outline-none text-xs my-2 p-2 rounded bg-[#333] w-full bg-opacity-80 "/>
        ) }

        <input type="text"  ref={email} placeholder="Email Address" className=" focus:outline-none text-xs my-2 p-2 rounded bg-[#333] w-full bg-opacity-80 "/>

        <input type="password"  ref={password} placeholder="Password" className="focus:outline-none text-xs my-2 p-2 rounded bg-[#333] w-full bg-opacity-80"/>
        <button type="button" className="hover:bg-red-700 focus:outline-none py-2 my-2 bg-red-600 w-full rounded text-xs" onClick={buttonClick}>{isSignUp?"Sign in": "Sign Up"}</button>

        <p className="text-red-500 text-xs">
          {errMessage}
        </p>

    <h2 className=" text-xs text-[#737373] mt-10">{isSignUp?"New to Netflix?":"Already on Netflix?"} <span onClick={checkIsSignUp} className="text-white cursor-pointer underline hover:text-blue-500">{isSignUp?"Signup":"Sign In"}</span></h2>
    </form>

    </>
  )
}

export default Login;