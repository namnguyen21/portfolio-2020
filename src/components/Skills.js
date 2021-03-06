import React from "react";
import styled from "styled-components";
import Javascript from "../images/javascript.svg";
import Python from "../images/python.svg";
import ReactIcon from "../images/react.svg";
import Redux from "../images/redux.svg";
import MySQL from "../images/mysql.svg";
import Mongo from "../images/mongodb.svg";
import Layout from "./Layout";

const Container = styled.div`
  transform: translateY(-2px);
  width: 100%;
  margin-bottom: 10rem;
  padding: 0 10rem;
  @media (max-width: 1000px) {
    padding: 0 2rem;
    margin-bottom: 8rem;
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

const Section = styled.div`
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  > * {
    /* &:not(:last-child) {
      margin-right: 3rem;
    } */
  }
  @media (max-width: 1000px) {
    justify-content: space-evenly;
    align-items: center;
  }
`;

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    width: 40%;
    margin-bottom: 2rem;
  }
`;

const Icon = styled.img`
  width: 10rem;
`;

const IconDescription = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: 100;
`;

export default function Skills() {
  const skills = [
    { name: "React", image: ReactIcon },
    { name: "Redux", image: Redux },
    { name: "JavaScript", image: Javascript },
    { name: "Python", image: Python },
    { name: "MySQL", image: MySQL },
    { name: "MongoDB", image: Mongo },
  ];

  return (
    <Container>
      <Layout>
        <Heading id="skills">What can I do?</Heading>
        <Section>
          <IconGroup>
            {skills.map((item, i) => {
              return (
                <IconCard key={i}>
                  <Icon src={item.image} alt={item.name} />
                  <IconDescription>{item.name}</IconDescription>
                </IconCard>
              );
            })}
          </IconGroup>
        </Section>
      </Layout>
    </Container>
  );
}
