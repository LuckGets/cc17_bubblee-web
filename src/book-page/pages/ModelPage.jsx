import React from "react";
import Button from "../components/Button";
import ModelCard from "../components/ModelCard";
import ModelDetails from "../components/ModelDetails";

function ModelPage() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex gap-5">
        <ModelDetails/>
        <ModelCard />
      </div>
      <div className="w-1/2 py-10 flex justify-between">
        <div className="flex gap-5">
          <Button to="/book/main" bg="white">
            Back
          </Button>
          <Button to="/">Cancel</Button>
        </div>
        <Button to="/book/model" text="white" bg="black">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default ModelPage;
