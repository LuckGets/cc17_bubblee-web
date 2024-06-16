import React from "react";

function TextPart() {
  return (
    <div className="w-full flex items-center flex-col bg-gray-100 p-20 gap-10">
      <h1 className="text-4xl">Perfect service by your own choice</h1>
      <div className="flex gap-5">
        <div>
          <h1 className="text-2xl">Event transportation</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            ut sit ipsam illo aspernatur porro, voluptas necessitatibus
            consequatur quos pariatur?
          </p>
        </div>
        <div>
          <h1 className="text-2xl">Group transportation</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            ut sit ipsam illo aspernatur porro, voluptas necessitatibus
            consequatur quos pariatur?
          </p>
        </div>
        <div>
          <h1 className="text-2xl">VIP transportation</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            ut sit ipsam illo aspernatur porro, voluptas necessitatibus
            consequatur quos pariatur?
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextPart;
