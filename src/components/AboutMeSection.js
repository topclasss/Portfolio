import React, { useState } from "react";
import {
  AboutMeContainer,
  AboutMeContentContainer,
  AboutMeImage,
  AboutMeContent,
  AboutMeTitle,
  ArrowButton,
} from "../styles/styledComponents";

import gdImage1 from "../gd.jpg";
import gdImage2 from "../gd2.jpg";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const nextImage = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsVisible(true);
    }, 200);
  };

  const prevImage = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsVisible(true);
    }, 200);
  };

  return (
    <div style={{ position: "relative" }}>
      <ArrowButton
        style={{ position: "absolute", right: "46%", top: "40%" }}
        onClick={prevImage}
      >
        &lt;
      </ArrowButton>
      <AboutMeImage
        src={images[currentImageIndex]}
        alt="Your Alt Text"
        isVisible={isVisible}
      />
      <ArrowButton
        style={{ position: "absolute", left: "92%", top: "40%" }}
        onClick={nextImage}
      >
        &gt;
      </ArrowButton>
    </div>
  );
};
const AboutMeSection = () => {
  const images = [gdImage1, gdImage2];
  return (
    <AboutMeContainer id="about">
      <ImageSlider images={images} />
      <AboutMeContentContainer>
        <AboutMeTitle>About Me</AboutMeTitle>
        <AboutMeContent>
          Hello! I'm Samir, a Full Stack Developer passionate about code and
          design.
          <br /> Proficient in HTML, CSS, and JavaScript, I excel in
          collaborative environments,
          <br /> fostering creativity and innovation within teams. Beyond
          coding, I'm an avid chef,
          <br /> gamer, and music producer. A quick learner, I adapt swiftly to
          new technologies,
          <br /> ensuring my skills stay cutting-edge.
        </AboutMeContent>
      </AboutMeContentContainer>
    </AboutMeContainer>
  );
};
export default AboutMeSection;
