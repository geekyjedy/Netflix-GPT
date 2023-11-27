import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRoutingVar = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRoutingVar} />
    </div>
  );
};

export default Body;
