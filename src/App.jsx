import { useState } from "react";

import Router from "./Router/Router";
import AuthenContextProvider from "./authentication/contexts/authenContext";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense>
        <AuthenContextProvider>
          <Router />
        </AuthenContextProvider>
      </Suspense>
    </>
  );
}

export default App;
