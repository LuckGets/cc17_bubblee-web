import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookWrapper from "../book-page/BookWrapper";
import OneWayOrRound from "../book-page/pages/OneWayOrRound";
import BookMainPage from "../book-page/pages/BookMainPage";
import ModelPage from "../book-page/pages/ModelPage";
import PaymentPage from "../book-page/pages/PaymentPage";
import ConfirmModelPage from "../book-page/pages/ConfirmModelPage";
import SuccessPage from "../book-page/pages/SuccessPage";
import ReserveWrapper from "../reservation-page/ReserveWrapper";
import ReserveHistory from "../reservation-page/ReserveHistory";
import ProtectedRoute from "../authentication/protected-route/ProtectedRoute";
import AdminWrapper from "../admin-page/AdminWrapper";
import AdminRoute from "../admin-page/AdminRoute";
import AdminLandingPage from "../admin-page/components/AdminLandingPage";
import OrderWrapper from "../admin-page/layout/OrderWrapper";
import NavigatePolice from "../authentication/NavigatePolice";
const HomePage = lazy(() => import("../pages/HomePage"));
const MainWrapper = lazy(() => import("../layouts/MainWrapper"));
const SignupPage = lazy(() => import("../pages/SignupPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavigatePolice>
        <MainWrapper />
      </NavigatePolice>
    ),
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
          {
            path: "/book/confirm",
            element: <ConfirmModelPage />,
          },
          {
            path: "/book/payment",
            element: <PaymentPage />,
          },
          {
            path: "/book/success",
            element: <SuccessPage />,
          },
        ],
      },
      {
        path: "/reserve",
        element: <BookWrapper />,
        children: [
          {
            path: "/reserve",
            element: <ReserveWrapper />,
          },
          {
            path: "/reserve/history",
            element: (
              <ProtectedRoute>
                <ReserveHistory />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminWrapper />
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminLandingPage />,
      },
      {
        path: "/admin/reservation",
        element: <OrderWrapper />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
