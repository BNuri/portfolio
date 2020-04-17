import React from "react";
import styled from "styled-components";
import media from "../Components/media";
import LazyLoadingBackImage from "../Components/LazyLoadingBackImage";

const Container = styled.main`
  height: calc(100vh - 180px);
  padding: 0px 50px;
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

const ImageContainer = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  margin-bottom: 20px;
  overflow: hidden;
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
    <ImageContainer>
      <LazyLoadingBackImage
        src={"https://avatars1.githubusercontent.com/u/34462368?s=460&v=4"}
        placeholder={require(`../assets/loading.png`)}
        height={"180px"}
        width={"180px"}
      />
    </ImageContainer>
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
