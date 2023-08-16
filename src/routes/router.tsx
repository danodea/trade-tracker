import { createBrowserRouter } from "react-router-dom";
import { TradeListContainer } from "../components/TradeListContainer";

export const mainRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  {
    path: "/trades",
    element: <TradeListContainer />,
  },
  // {
  //     path: "/trades/:id",
  //     element: <Trade />
  // }
]);
