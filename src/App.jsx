import { useState } from "react";
import Router from "./Router/Router";
import AuthenContextProvider from "./authentication/contexts/authenContext";
import { Suspense } from "react";
import ReserveContextProvider from "./book-page/context/ReserveContext";

function App() {
  return (
    <>
      <Suspense>
        <AuthenContextProvider>
          <ReserveContextProvider>
            <Router />
          </ReserveContextProvider>
        </AuthenContextProvider>
      </Suspense>
    </>
  );
}

export default App;
