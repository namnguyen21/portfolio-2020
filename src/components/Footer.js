import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  height: 15rem;
  width: 100vw;
  background: transparent;
  border-top: solid 1px ${(props) => props.theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 5rem;
  }
`;

const Column = styled.div``;

const Sub = styled.a`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  display: inline-block;
  > i {
    color: inherit;
    font-size: 3rem;
    &:hover {
      color: ${(props) => props.theme.colors.tan};
    }
  }
  &:not(:last-child) {
    margin-right: 5rem;
  }
`;

export default function Footer() {
  return (
    <Foot>
      <Content>
        <Column>
          <Sub
            href="https://www.linkedin.com/in/namdoannguyen/"
            alt="LinkedIn"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </Sub>
          <Sub
            href="https://github.com/namnguyen21"
            alt="Github"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </Sub>
        </Column>
      </Content>
    </Foot>
  );
}
