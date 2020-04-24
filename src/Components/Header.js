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
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const List = styled.li``;

const Item = styled.span`
  cursor: pointer;
  padding: 15px 25px;
  background-color: ${(props) => (props.now ? "#f05742" : "inherit")};
  color: ${(props) => (props.now ? "white" : "inherit")};
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
  @media (max-width: 480px) {
    padding: 10px 10px;
  }
`;

const Logo = styled.div`
  height: 70px;
  width: 140px;
  background-image: url(${(props) => props.bgPath});
  background-size: cover;
  background-position: center center;
  transition: all 0.5s linear;
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
    background-image: url(${(props) => props.bgPathSmall});
  }
  @media (max-width: 480px) {
    height: 40px;
    width: 40px;
  }
`;

const HLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <ListContainer>
      <List>
        <HLink to="/" title="홈">
          <Logo
            bgPath={require("../assets/logo.png")}
            bgPathSmall={require("../assets/logo-s.png")}
          />
        </HLink>
      </List>
      <List>
        <HLink to="/projects" title="프로젝트">
          <Item now={pathname === "/projects"}>PROJECTS</Item>
        </HLink>
      </List>
      <List>
        <HLink to="/about" title="자세히">
          <Item now={pathname === "/about"}>ABOUT</Item>
        </HLink>
      </List>
      <List>
        <HLink to="/contact" title="연락처">
          <Item now={pathname === "/contact"}>CONTACT</Item>
        </HLink>
      </List>
    </ListContainer>
  </Header>
));
