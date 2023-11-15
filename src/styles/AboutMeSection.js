import React, { useState } from "react";
import {
  AboutMeContainer,
  AboutMeContentContainer,
} from "../styles/styledComponents";

import gdImage1 from "../gd.jpg";
import gdImage2 from "../gd2.jpg";

const AboutMeTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  margin-top: 250px;
`;

const AboutMeContent = styled.p`
  font-size: 1.2rem;
  color: #555;
  color: #555;
  column-count: 1;
  column-gap: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

const AboutMeImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-right: 20px;
  width: 400px;
  height: 600px;
  margin-left: 400px;
  margin-bottom: 250px;
  margin-top: 90px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: lightgrey;
  transition: color 0.3s ease;

  &:hover {
    color: grey;
  }

  &:active {
    color: black;
  }
`;

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
