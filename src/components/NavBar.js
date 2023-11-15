import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCode,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const HoverContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ expanded }) => (expanded ? "70px" : "0px")};
  background-color: transparent;
  overflow: hidden;
  z-index: 999;
  transition: width 0.5s;
  cursor: ${({ expanded }) => (expanded ? "default" : "pointer")};
  &:hover {
    width: 70px;
  }
`;

const NavContainer = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #333;
`;

const NavItem = styled.a`
  margin-bottom: 20px;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 50px;
  border-radius: 55%;
  transition: color 0.5s, transform 0.5s, box-shadow 0.5s;

  &:hover {
    color: #fff;
    transform: scale(1.1);
    box-shadow: 0 0 4px 8px rgba(255, 255, 255, 0.8);
    text-shadow: 0 0 5px #fff;
  }

  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.8);
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HamburgerIcon = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 1000;
  color: #333;

  &:hover {
    color: #333;
  }
`;

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setExpanded(false);
    }
  };

  return (
    <>
      <HoverContainer expanded={expanded}>
        <NavContainer>
          <NavItem onClick={() => scrollToSection("hero")}>
            <FontAwesomeIcon icon={faHome} />
          </NavItem>
          <NavItem onClick={() => scrollToSection("about")}>
            <FontAwesomeIcon icon={faUser} />
          </NavItem>
          <NavItem onClick={() => scrollToSection("projects")}>
            <FontAwesomeIcon icon={faCode} />
          </NavItem>
          <NavItem onClick={() => scrollToSection("contact")}>
            <FontAwesomeIcon icon={faEnvelope} />
          </NavItem>
        </NavContainer>
      </HoverContainer>
      {!expanded && (
        <HamburgerIcon onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </HamburgerIcon>
      )}
    </>
  );
};

export default NavBar;
