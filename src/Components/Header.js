import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  height: 100px;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #f2eae0;
  border-radius: 10px;
  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const Item = styled.li`
  cursor: pointer;
  padding: 15px 25px;
  background-color: ${props => (props.now ? "#f05742" : "inherit")};
  color: ${props => (props.now ? "white" : "inherit")};
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #f05742;
    color: white;
    border-radius: 30px;
    border-bottom: solid 4px #c44c3c;
  }
  &:active {
    transform: translateY(3px);
    border-bottom: none;
  }
`;

const Logo = styled.div`
  height: 70px;
  width: 140px;
  background-image: url(${props => props.bgPath});
  background-size: cover;
  background-position: center center;
  transition: all 0.5s linear;
  @media (max-width: 600px) {
    height: 50px;
    width: 50px;
    background-image: url(${props => props.bgPathSmall});
  }
`;

const HLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <HLink to="/">
        <Logo
          bgPath={require("../assets/logo.png")}
          bgPathSmall={require("../assets/logo-s.png")}
        />
      </HLink>
      <HLink to="/projects">
        <Item now={pathname === "/projects"}>PROJECTS</Item>
      </HLink>
      <HLink to="/about">
        <Item now={pathname === "/about"}>ABOUT</Item>
      </HLink>
      <HLink to="/contact">
        <Item now={pathname === "/contact"}>CONTACT</Item>
      </HLink>
    </List>
  </Header>
));
