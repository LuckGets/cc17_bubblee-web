import React from "react";
import TestimonialCard from "./hero-section/components/TestimonialCard";

const testTimonArr = [
  {
    name: "John Doe",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, perferendis?",
    title: "Such an amazing times and services",
    image:
      "https://res.cloudinary.com/dfpte5gy7/image/upload/v1718551346/300_5_krygwr.jpg",
  },
  {
    name: "Jackie Chan",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, perferendis?",
    title: "I've never had such a service like this before!",
    image:
      "https://res.cloudinary.com/dfpte5gy7/image/upload/v1718551337/300_15_wlw4ml.jpg",
  },
  {
    name: "บวรศักดิ์ สรรณงค์กรรชัย",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, perferendis?",
    title: "Reliable and Reliable.",
    image:
      "https://res.cloudinary.com/dfpte5gy7/image/upload/v1718551333/300_13_zccxew.jpg",
  },
  {
    name: "Boom Boom Chukka",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, perferendis?",
    title:
      "Imagine having a van stops by in front of your house waiting to take you to a trip.",
    image:
      "https://res.cloudinary.com/dfpte5gy7/image/upload/v1718551325/team-8_lrbwwq.jpg",
  },
];

function Testimonial() {
  return (
    <div className="py-10 px-20 flex flex-col items-center gap-10">
      <h1 className="text-4xl">What Our Client says about us</h1>
      <div className="grid grid-cols-2 gap-20">
        {testTimonArr.map((item, index) => (
          <TestimonialCard key={index} details={item} />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
