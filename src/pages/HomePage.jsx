import React from "react";
import HeroSection from "../home-section/hero-section/HeroSection";
import ShowParts from "../layouts/ShowParts";
import MiddlePart from "../home-section/MiddlePart";
import TextPart from "../home-section/TextPart";
import Testimonial from "../home-section/Testimonial";
import FAQpart from "../home-section/FAQpart";

function Homepage() {
  return (
    <div className="backgroundImage">
      <HeroSection />
      <ShowParts />
      <MiddlePart />
      <TextPart />
      <Testimonial />
      <FAQpart />
    </div>
  );
}

export default Homepage;
