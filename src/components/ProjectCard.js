import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  transform: ${(props) =>
    props.visible ? "translateX(0)" : "translateX(-100px)"};
  opacity: ${(props) => (props.visible ? "1.0" : "0.0")};
  transition: transform 1s, opacity 1s;
  width: 80rem;
  margin: auto;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 8rem;
  @media (max-width: 1000px) {
    width: 0;
    display: none;
  }
`;

const CardBody = styled.div`
  margin-left: 3rem;
  > * {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

const CardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CardTitle = styled.h3`
  font-size: 3.5rem;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 0.3rem;
  line-height: 1;
  @media (max-width: 1000px) {
    margin-bottom: 1rem;
  }
`;

const CardButtonGroup = styled.div`
  display: flex;
  align-items: center;
  > * {
    &:not(:last-child) {
      margin-right: 3rem;
    }
  }
`;

const CardButton = styled.a`
  color: ${(props) => props.theme.colors.tan};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: solid 1px ${(props) => props.theme.colors.tan};
  cursor: pointer;
  font-weight: 100;
  font-size: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  > i {
    color: inherit;
    font-size: 2rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.tan};
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.grey};
  font-size: 2.2rem;
  font-weight: 100;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > * {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  @media (max-width: 1000px) {
    justify-content: flex-start;
  }
`;

const Tag = styled.div`
  /* border: solid 1px ${(props) => props.theme.colors.white}; */
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.4rem;
  @media (max-width: 1000px) {
    margin-bottom: 1rem;
  }
`;

export default function ProjectCard({
  title,
  image,
  description,
  tools,
  deployed,
  code,
  demo,
}) {
  const [visible, setVisible] = useState(false);
  const element = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(element.current);
    return () => observer.unobserve(element.current);
  }, [element]);
  return (
    <Card ref={element} visible={visible}>
      <CardImage src={image} alt={title} />
      <CardBody>
        <CardHeading>
          <CardTitle>{title}</CardTitle>
          <TagContainer>
            {tools.map((tool, i) => (
              <Tag key={i}>{tool}</Tag>
            ))}
          </TagContainer>
        </CardHeading>

        <CardDescription>{description}</CardDescription>
        <CardButtonGroup>
          <CardButton href={code} target="_blank" alt={title}>
            <i className="fas fa-code"></i> Code
          </CardButton>
          <CardButton href={deployed} target="_blank" alt={title}>
            <i className="far fa-eye"></i> Deployed
          </CardButton>
          <CardButton href={demo} target="_blank" alt={title}>
            <i className="fab fa-youtube"></i> Demo
          </CardButton>
        </CardButtonGroup>
      </CardBody>
    </Card>
  );
}
