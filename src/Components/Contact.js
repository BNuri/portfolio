import React from "react";
import styled from "styled-components";
import media from "./media";

const Container = styled.div`
  height: calc(100vh - 180px);
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tablet`
    flex-direction: column;
    justify-content: flex-start;
  `};
  ${media.mobile`
    height: calc(100vh - 110px);
    padding: 20px;
  `};
`;

const Image = styled.div`
  height: 180px;
  width: 180px;
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Profile = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  ${media.tablet`
    margin-left: 0 ;
    align-items: center;
  `};
`;

const Span = styled.span`
  margin-bottom: 20px;
`;

export default () => (
  <Container>
    <Image
      imagePath={"https://avatars1.githubusercontent.com/u/34462368?s=460&v=4"}
    />
    <Profile>
      <Span>
        <i className="far fa-hand-point-right" /> 배누리
      </Span>
      <Span>
        <i className="fas fa-mobile-alt" /> 010-2791-9847
      </Span>
      <Span>
        <i className="far fa-envelope" /> luckmon05@naver.com
      </Span>
      <a href="https://github.com/BNuri">
        <i className="fab fa-github" /> https://github.com/BNuri
      </a>
    </Profile>
  </Container>
);
