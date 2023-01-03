import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main/Main";

import Protected from "../pages/Login/Index";
import About from "../pages/Main/About";
import Cart from "../pages/Main/Cart";
import Home from "../pages/Main/Home";
import TopRated from "../pages/Main/TopRated";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Protected Component={Home} />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default routes;
