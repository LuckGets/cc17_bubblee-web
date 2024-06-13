import React from "react";
import useAuthenContext from "../../authentication/hooks/useAuthenContext";

function AdminLandingPage() {
  const { authenUser } = useAuthenContext();
  return (
    <div className="w-full min-h-[calc(100vh-20rem)] flex justify-center items-center">
      <h1 className="text-5xl">Hello {authenUser?.name}</h1>
    </div>
  );
}

export default AdminLandingPage;
