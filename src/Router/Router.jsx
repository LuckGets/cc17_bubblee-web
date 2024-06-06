import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainWrapper from "../layouts/MainWrapper";
import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainWrapper />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },{
        path: "/login",
        element :  <div>Login page</div>
      },{
        path : "/signup",
        element : <SignupPage/>
      }
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
