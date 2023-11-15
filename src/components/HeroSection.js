import React from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  RotatingBar,
  ImageContainer,
  StyledImage,
  TechStackContainer,
  TechIcon,
} from "../styles/styledComponents";

import MyImage from "../MyImage.jpg";
import { FaJs, FaCss3, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import PhotoshopIcon from "../adobe-photoshop-svgrepo-com.svg";
import AfterEffectsIcon from "../adobeaftereffects-svgrepo-com.svg";
import IllustratorIcon from "../adobe-illustrator-svgrepo-com.svg";

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <RotatingBar />

      <ImageContainer>
        <StyledImage src={MyImage} alt="My Name" />
      </ImageContainer>

      <HeroTitle>Samir Nori</HeroTitle>
      <HeroSubtitle>Full Stack Developer</HeroSubtitle>

      <TechStackContainer>
        <p>Techstack:</p>
        <TechIcon>
          <FaJs title="JavaScript" />
        </TechIcon>
        <TechIcon>
          <FaCss3 title="CSS" />
        </TechIcon>
        <TechIcon>
          <FaHtml5 title="HTML" />
        </TechIcon>
        <TechIcon>
          <FaReact title="React" />
        </TechIcon>
        <TechIcon>
          <FaNodeJs title="Node.js" />
        </TechIcon>
      </TechStackContainer>

      <TechStackContainer>
        <p>Proficient in:</p>
        <TechIcon>
          <img
            src={PhotoshopIcon}
            alt="Photoshop"
            style={{ width: "25px", height: "25px" }}
          />
        </TechIcon>
        <TechIcon>
          <img
            src={AfterEffectsIcon}
            alt="After Effects"
            style={{ width: "25px", height: "25px" }}
          />
        </TechIcon>
        <TechIcon>
          <img
            src={IllustratorIcon}
            alt="Illustrator"
            style={{ width: "25px", height: "25px" }}
          />
        </TechIcon>
      </TechStackContainer>
    </HeroContainer>
  );
};

export default HeroSection;
