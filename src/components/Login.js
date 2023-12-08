import { useRef, useState } from "react";
import Header from "./Header";
import { formValidate } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "./constant";

const Login = () => {
  //-----navigation for routing

  const dispatch = useDispatch();

  //--------useState for signin/ signup
  const [isSignUp, setIsSignUp] = useState(true);

  //-----useState for error message storing
  const [errMessage, setErrMessage] = useState(null);

  //----password hide and show functionality

  const [pass, setPass] = useState(true);

  //-----useRef for getting reference of data from email and password fields
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  //--------user login and signup function according to signin/signup
  const buttonClick = function () {
    const formValidMessage = formValidate(
      email.current.value,
      password.current.value
    );
    //email and password are objects(do console log both for more info)

    setErrMessage(formValidMessage);

    if (formValidMessage) return;

    if (!isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // dispatch();
            })
            .catch((error) => {
              setErrMessage(error.message);
            });

          // console.log(user);
          //this user is object of our newly signed up user
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode || errorMessage) {
            setErrMessage("user doesn't exist, please SignUp first");
          }
        });
    }
  };

  //--------signin/signup form toggle function
  const checkIsSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  //---password handle function

  const passwordHandle = () => {
    setPass(!pass);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        ></img>
      </div>
      <form className="absolute m-36 p-12 bg-black w-3/12 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h3 className="font-bold text-xl">
          {isSignUp ? "Sign in" : "Sign Up"}
        </h3>
        {!isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" focus:outline-none text-xs my-2 p-2 rounded bg-[#333] w-full bg-opacity-80 "
          />
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className=" focus:outline-none text-xs my-2 p-2 rounded bg-[#333] w-full bg-opacity-80 "
        />
        <div >
          <input
            type={pass ? "text" : "password"}
            ref={password}
            placeholder="Password"
            className="focus:outline-none text-xs my-2 p-2 rounded bg-[#333]  bg-opacity-80"
          />
          <span className="cursor-pointer text-xs inline" onClick={passwordHandle}>
            {pass ? "hide" : "show"}
          </span>
        </div>
        <button
          type="button"
          className="hover:bg-red-700 focus:outline-none py-2 my-2 bg-red-600 w-full rounded text-xs"
          onClick={buttonClick}
        >
          {isSignUp ? "Sign in" : "Sign Up"}
        </button>

        <p className="text-red-500 text-xs">{errMessage}</p>

        <h2 className=" text-xs text-[#737373] mt-10">
          {isSignUp ? "New to Netflix?" : "Already on Netflix?"}{" "}
          <span
            onClick={checkIsSignUp}
            className="text-white cursor-pointer underline hover:text-blue-500"
          >
            {isSignUp ? "Signup" : "Sign In"}
          </span>
        </h2>
      </form>
    </>
  );
};

export default Login;
