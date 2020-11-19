import React from "react";
import styled from "styled-components";
import Tasks from "../images/list.svg";
import News from "../images/news.svg";
import QR from "../images/qr-code.svg";
import ProjectCard from "./ProjectCard";
import Layout from "./Layout";

const Container = styled.div`
  padding: 0 10rem;
  margin-bottom: 20rem;
  @media (max-width: 1000px) {
    padding: 0 2rem;
    margin-bottom: 10rem;
  }
`;

const Heading = styled.h2`
  font-size: 5rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.tan};
  margin-bottom: 4rem;
  letter-spacing: 0.2rem;
  @media (max-width: 1000px) {
    font-size: 4rem;
  }
`;

export default function Projects() {
  const projects = [
    {
      title: "Snap Menu",
      image: QR,
      description:
        "A website that allows for restaurants to upload menu items and generate a unique QR code to display in their business meant to replace paper menus. Users can upload by manually uploading items or buld uploading using CSV files.",
      tools: ["React", "Redux", "Styled-Components", "NodeJS", "MySQL"],
      deployed: "https://snapmenu.us",
      code: "https://github.com/namnguyen21/qr-menu",
      demo: "https://youtu.be/6e7ne5X9fes",
    },
    {
      title: "Daily Dose",
      image: News,
      description:
        "A content aggregation application that uses a Python script to gather articles and posts from various media and news outlets. ",
      tools: ["React", "Styled-Components", "NodeJS", "Python", "MongoDB"],
      deployed: "https://pacific-temple-25329.herokuapp.com/",
      code: "https://github.com/namnguyen21/daily-dose",
      demo: "https://www.youtube.com/watch?v=AYH8XHADRI4",
    },
    {
      title: "Projectify",
      image: Tasks,
      description:
        "A task and project management tool with built in chat functionality and ability to share real-time changes. Users can create individual project rooms and collaborate.",
      tools: ["React", "Redux", "Material-UI", "NodeJS", "MongoDB"],
      deployed: "https://projectify-test.herokuapp.com/",
      code: "https://github.com/namnguyen21/projectify-updated",
      demo: "https://www.youtube.com/watch?v=DsHuuDnm4Z4",
    },
  ];

  return (
    <Container id="projects">
      <Layout>
        <Heading>What have I been up to?</Heading>
        {projects.map((proj, i) => (
          <ProjectCard
            key={i}
            title={proj.title}
            image={proj.image}
            description={proj.description}
            tools={proj.tools}
            deployed={proj.deployed}
            code={proj.code}
            demo={proj.demo}
          />
        ))}
      </Layout>
    </Container>
  );
}
