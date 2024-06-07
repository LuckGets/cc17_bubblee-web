import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
