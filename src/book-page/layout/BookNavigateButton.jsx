import React from "react";

import Button from "../components/Button";

function BookNavigateButton(back, to, onClick, onCancel) {
  return (
    <div className="w-full py-10 flex justify-between">
      <div className="flex gap-5">
        <Button to={back} bg="white">
          Back
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
      <Button to={to} onClick={onClick} text="white" bg="primary">
        Continue
      </Button>
    </div>
  );
}

export default BookNavigateButton;
