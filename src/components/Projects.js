import React, { useState } from "react";
import project1Screenshot from "../project1.png";
import project2Screenshot from "../project2.png";
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  VisitButton,
  ProjectScreenshot,
  ArrowButton,
} from "../styles/styledComponents";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      title: "Project 1",
      description: "A Nyan Cat game using hitboxes to detect enemies.",
      screenshot: project1Screenshot,
      link: "https://project-js-nyan-cat-two.vercel.app/",
    },
    {
      title: "Project 2",
      description: "A online fruit store",
      screenshot: project2Screenshot,
      link: "https://react-ecosystem-phi.vercel.app/",
    },
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectCard>
        <ArrowButton className="prev-arrow" onClick={prevProject}>
          &lt;
        </ArrowButton>
        <ProjectTitle>{projects[currentProjectIndex].title}</ProjectTitle>
        <ProjectScreenshot
          src={projects[currentProjectIndex].screenshot}
          alt={`Project ${currentProjectIndex + 1} Screenshot`}
        />
        <ProjectDescription>
          {projects[currentProjectIndex].description}
        </ProjectDescription>
        <VisitButton
          href={projects[currentProjectIndex].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Project
        </VisitButton>
        <ArrowButton className="next-arrow" onClick={nextProject}>
          &gt;
        </ArrowButton>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default Projects;
