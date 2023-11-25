import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);

  const signoutFunction = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      <div className="flex items-center ">
        <img className="h-12 w-12 m-4" src={user?.photoURL}></img>
        <button
          onClick={signoutFunction}
          className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 "
        >
          sign out
        </button>
      </div>
    </div>
  );
};

export default Browse;
