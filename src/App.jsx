import { useState } from "react";
import Router from "./Router/Router";
import AuthenContextProvider from "./authentication/contexts/authenContext";
import { Suspense } from "react";
import ReserveContextProvider from "./book-page/context/ReserveContext";
import Spinner from "./components/Spinner";
import { APIProvider } from "@vis.gl/react-google-maps";
function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
          <AuthenContextProvider>
            <ReserveContextProvider>
              <Router />
            </ReserveContextProvider>
          </AuthenContextProvider>
        </APIProvider>
      </Suspense>
    </>
  );
}

export default App;
