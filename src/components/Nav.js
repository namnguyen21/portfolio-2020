import React, { useState } from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = styled.nav`
  padding: 3rem 5rem;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  align-items: stretch;
  background: ${(props) => props.theme.colors.white};
  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  position: relative;
  z-index: 9999999999999;
`;

const Logo = styled.h1`
  font-family: "Satisfy", cursive;
  font-size: 4rem;
  color: ${(props) => props.theme.colors.tan};
  z-index: 9999999999;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const NavItem = styled(AnchorLink)`
  color: ${(props) => props.theme.colors.darkGrey};
  font-weight: 100;
  font-size: 2.5rem;
  background: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  padding-bottom: 0.5rem;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.tan};
    transition: all 0.5s;
  }
  &:focus {
    color: ${(props) => props.theme.colors.tan};
    transition: all 0.3s;
  }
`;

const Socials = styled.div`
  align-self: center;
  justify-self: end;
  display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Icon = styled.a`
  &:not(:last-child) {
    margin-right: 3rem;
  }
  cursor: pointer;
`;

const I = styled.i`
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 3rem;
  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.tan};
  }
`;

const Hamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999999999;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  div {
    width: 3rem;
    height: 0.25rem;
    display: block;
    background-color: ${(props) => props.theme.colors.darkGrey};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

const Menu = styled.div`
  width: 100%;
  padding-bottom: 5rem;
  background: #fff;
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  bottom: ${(props) => (props.open ? null : "0")};
  transform: ${(props) =>
    !props.open ? "translateY(-200%)" : "translateY(0)"};
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99999999;
  /* -webkit-box-shadow: 0px 10px 12px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 12px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 12px -2px rgba(0, 0, 0, 0.75); */
  box-shadow: 0 4px 2px -2px gray;
  > * {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

const MenuItem = styled(AnchorLink)`
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 3rem;
  display: ${(props) => (!props.open ? "none" : null)};
  text-align: center;
  text-decoration: none;
  font-weight: 100;
`;

const MenuSocial = styled.a`
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 3rem;
  font-weight: 100;
  display: ${(props) => (!props.open ? "none" : null)};
  text-align: center;
  text-decoration: none;
`;

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <NavBar>
      <Logo>N</Logo>
      <ItemContainer>
        <NavItem>About</NavItem>
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#projects">Projects</NavItem>
      </ItemContainer>
      <Socials>
        <Icon>
          <I className="fab fa-github"></I>
        </Icon>
        <Icon>
          <I className="fab fa-linkedin-in"></I>
        </Icon>
      </Socials>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <Menu open={open}>
        <MenuItem open={open} href="#skills">
          Skills
        </MenuItem>
        <MenuItem open={open} href="#projects">
          Projects
        </MenuItem>
        <MenuSocial
          open={open}
          href="https://www.linkedin.com/in/namdoannguyen/"
          alt="LinkedIn"
        >
          LinkedIn
        </MenuSocial>
        <MenuSocial
          open={open}
          href="https://github.com/namnguyen21"
          alt="Github"
        >
          Github
        </MenuSocial>
      </Menu>
    </NavBar>
  );
}
