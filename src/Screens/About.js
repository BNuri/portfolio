import React from "react";
import styled from "styled-components";
import media from "../Components/media";
import Button from "../Components/Button";

const Container = styled.main`
  height: calc(100vh - 180px);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.mobile`
    height: auto;
    padding: 20px;
  `};
`;

const Introduce = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`;

const Image = styled.div`
  height: 80px;
  width: 80px;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  ${media.mobile`
    display: none;
  `};
`;

const DescUl = styled.ul`
  margin-left: 20px;
  ${media.mobile`
    margin-left: 0;
  `};
`;

const DescLi = styled.li`
  margin-top: 10px;
  line-height: 1.8;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export default () => (
  <Container>
    <Title>About</Title>
    <Introduce>
      <Image
        imagePath={
          "https://avatars1.githubusercontent.com/u/34462368?s=460&v=4"
        }
      />
      <DescUl>
        <DescLi>안녕하세요.</DescLi>
        <DescLi>JavaScript를 주로 사용하여 웹을 개발하는 배누리입니다.</DescLi>
        <DescLi>사용자 경험 향상을 위한 요소들에 관심이 많습니다.</DescLi>
        <DescLi>
          문제를 해결하는데 도움이 되는 웹을 개발하는 것이 목표입니다.
        </DescLi>
      </DescUl>
    </Introduce>
    <Button
      href={"https://bnuri.github.io/resume/"}
      icon={"faFileAlt"}
      name={"이력서"}
    />
  </Container>
);
