import React from "react";
import styled from "styled-components";
import Avatar from "../images/avatar.svg";
import Layout from "./Layout";

const Container = styled.div`
  width: 100%;
  margin: auto;
  padding-bottom: 117px;
  margin-bottom: 5rem;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  @media (max-width: 1000px) {
    padding: 0 2rem 117px;
    border: none;
    transform: translateY(-1px);
  }
  /* min-height: 600px; */
`;

const Wave = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
`;

const SVG = styled.svg`
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 128px;
  stroke: none;
`;

const Path = styled.path`
  fill: #3e4c59;
  stroke: none;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 5rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.tan};
  letter-spacing: 1rem;
  @media (max-width: 1000px) {
    font-size: 4rem;
    letter-spacing: 0.5rem;
  }
`;

const Subheading = styled.h3`
  font-size: 4rem;
  font-weight: 100;
  color: ${(props) => props.theme.colors.tan};
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 2.5rem;
    letter-spacing: 0rem;
  }
`;

const Divider = styled.div`
  height: 2px;
  width: 90%;
  background-color: ${(props) => props.theme.colors.tan};
  margin: 3rem auto;
  @media (max-width: 1000px) {
    margin: 2rem auto;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  justify-content: space-evenly;
`;

const Image = styled.img`
  width: 20rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Description = styled.p`
  width: 60rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 2.5rem;
  text-align: center;
  font-weight: 100;
  @media (max-width: 1000px) {
    font-size: 2.5rem;
    text-align: left;
    line-height: 1.3;
  }
`;

export default function About() {
  return (
    <Container>
      <Wave>
        <SVG
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/SVG"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <Path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></Path>
        </SVG>
      </Wave>
      <Layout>
        <Heading>Nam Nguyen</Heading>
        <Subheading>Full Stack Software Developer</Subheading>
        <Divider />
        <DescriptionContainer>
          <Image src={Avatar} alt="Avatar" />
          <Description>
            Welcome! My name is Nam and I'm a software developer. I graduated
            from UC Irvine with a degree in political science, however, my true
            passion lies with programming. Check out my work and connect with me
            on LinkedIn - lets grab a virtual coffee!
          </Description>
        </DescriptionContainer>
      </Layout>
      {/* <ButtonContainer>
        <Button>See My Work &#9660;</Button>
      </ButtonContainer> */}
    </Container>
  );
}
