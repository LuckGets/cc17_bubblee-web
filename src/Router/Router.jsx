import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookWrapper from "../book-page/BookWrapper";
import OneWayOrRound from "../book-page/pages/OneWayOrRound";
import BookMainPage from "../book-page/pages/BookMainPage";
import ModelPage from "../book-page/pages/ModelPage";
const HomePage = lazy(() => import("../pages/HomePage"));
const MainWrapper = lazy(() => import("../layouts/MainWrapper"));
const SignupPage = lazy(() => import("../pages/SignupPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainWrapper />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/book",
        element: <BookWrapper />,
        children: [
          {
            path: "/book",
            element: <OneWayOrRound />,
          },
          {
            path: "/book/main",
            element: <BookMainPage />,
          },
          {
            path: "/book/model",
            element: <ModelPage />,
          },
        ],
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
