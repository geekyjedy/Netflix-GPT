import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO, USER_AVATAR } from "./constant";
import { toggleGpt } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);


  const signoutFunction = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      // console.log(user);
    });
    return ()=>unsubscribe();
  }, []);

  const gptSearchClick = ()=>{
    dispatch(toggleGpt())
  }

  const gptValue = useSelector(store=>store.gpt.showGptSearch)
  return (
    <div className="absolute w-full bg-black z-10 flex justify-between ">
      <img
        className="w-44 "
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex items-center ">
          <button
            onClick={gptSearchClick}
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 "
          >
            {gptValue ?"GPT Search on" :" GPT Search off "}
          </button>
          <img className="h-12 w-12 m-4" alt="user-icon" src={USER_AVATAR} />
          <button
            onClick={signoutFunction}
            className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 "
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
