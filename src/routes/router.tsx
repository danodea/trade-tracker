import { createBrowserRouter } from "react-router-dom";
import { TradeListContainer } from "../components/TradeListContainer";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import App from "../App";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
    ],
  },
]);
