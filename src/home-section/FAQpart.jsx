import React from "react";
import FaqCard from "./hero-section/components/FaqCard";
import { useState } from "react";

const faqArr = [
  {
    title: "What is the minimum expenses for one book trip",
    content:
      "Our policy for minimum price for book trip is 10 kilometres. Whatever model you pick, If the distance is more than 10 kilometers. We are ready to serve you.",
    id: 1,
  },
  {
    title: "Is there any limit for one trip distance?",
    content:
      "Unfortunately, No. We don't have limit for distance. Our driver are trained to take you anywhere you desired.",
    id: 2,
  },
  {
    title: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum",
    content:
      "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum",
    id: 3,
  },
];

const INIT_isShow = {
  1: false,
  2: false,
  3: false,
};

function FAQpart() {
  const [isShow, setIsShow] = useState(INIT_isShow);

  const handleClickShowAccordion = (isShowId) =>
    setIsShow({ ...isShow, [isShowId]: !isShow[isShowId] });

  return (
    <div className="flex flex-col items-center w-full py-10 gap-10 bg-[#CDCDCB]">
      <h1 className="text-5xl">Frequently Asked Questions</h1>
      <p>
        We are always ready to take our beloved customer every place their
        desired. But before booking a trip. You can ask us anything before
        consider.
      </p>
      <div className="w-full grid grid-cols-2 gap-10 px-20">
        {faqArr.map((item) => (
          <FaqCard
            onClick={() => handleClickShowAccordion(item.id)}
            isShow={isShow}
            key={item.id}
            id={item.id}
            details={item}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQpart;
