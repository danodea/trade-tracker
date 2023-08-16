import { createBrowserRouter } from "react-router-dom";
import { TradeListContainer } from "../components/TradeListContainer";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/trades",
    element: <TradeListContainer />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //     path: "/trades/:id",
  //     element: <Trade />
  // }
]);
