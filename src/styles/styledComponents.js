import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: 768px) {
    width: 210%;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin: 0 0 40px 0;
`;

export const TechStackContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  p {
    margin: 0 10px 0 0;
  }
`;

export const TechIcon = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  background-color: #fff;
  padding: 60px 20px;
  margin-top: 150px;
  @media (max-width: 768px) {
    width: 200%;
  }
`;
export const AboutMeContentContainer = styled.div`
  text-align: center;
  flex: 1;
  margin: 0;
  
`;

export const AboutMeTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #333;
  margin-top: 250px;
  
`;

export const AboutMeContent = styled.p`
  font-size: 1.3rem;
  color: #555;
  color: #555;
  column-count: 1;
  column-gap: 10px;
  max-width: 400px;
  margin: 0 auto;
  
`;

export const AboutMeImage = styled.img`
  max-width: 400px;
  border-radius: 8px;
  margin-right: 20px;
  width: 400px;
  height: 600px;
  margin-left: 400px;
  margin-bottom: 250px;
  margin-top: 90px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0%;
  }
`;

export const ProjectsContainer = styled.div`
  background-color: #f0f0f0;
  padding: 40px 20px 80px 20px;
  text-align: center;
  @media (max-width: 768px) {
    width: 200%;
  }
`;

export const ProjectsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
  margin-top: 0;
`;

export const ProjectCard = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  text-align: center;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

export const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

export const ContactContainer = styled.div`
  background-color: #fff;
  padding: 80px 20px;
  text-align: center;
  @media (max-width: 768px) {
    width: 200%;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #333;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SocialLinks = styled.div`
  margin-top: 80px;
`;

export const SocialLink = styled.a`
  font-size: 1.5rem;
  margin-right: 15px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const addMotionBlur = keyframes`
  0% { opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; }
  
`;
export const RotatingBar = styled.div`
  width: 700px;
  height: 700px;

  border-radius: 50%;
  position: absolute;
  animation: ${rotate} 20s linear infinite, ${addMotionBlur} 5s linear infinite;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(lightgrey, black);
    border: 4px solid transparent;
    border-radius: inherit;
    box-sizing: border-box;
    filter: blur(4px);
    transform: rotate(45deg);
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.7);
  }
`;


export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;
  height: 150px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: 100% 70%;
  transform: scale(1);
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ScrollDownLogoContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 2s infinite;
  cursor: pointer;
  opacity: ${(props) => (props.showArrow ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const Arrow = styled.div`
  width: 10px;
  height: 10px;
  border: solid #333;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  opacity: 40%;
`;

export const ProjectScreenshot = styled.img`
  width: 100%;
  height: 500px;
  width: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const VisitButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightgrey;
  }
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: lightgrey;
  transition: color 0.3s ease;
  @media (max-width: 100px) {
    width: 200%;
  }

  &:hover {
    color: grey;
  }

  &:active {
    color: black;
  }

  &.prev-arrow {
    position: absolute;
    left: 37%;
    top: 265%;
  }

  &.next-arrow {
    position: absolute;
    right: 37%;
    top: 265%;
  }
`;
