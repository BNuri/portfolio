import React from "react";
import styled, { keyframes } from "styled-components";
import media from "../Components/media";

const Container = styled.main`
  height: calc(100vh - 180px);
  padding: 50px;
  padding-top: 120px;
  ${media.mobile`height: calc(100vh - 110px)`};
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
`;

const Span = styled.span`
  margin: 20px 0;
`;

const ColorBox = styled.div`
  height: 50px;
  overflow: hidden;
`;

const show = keyframes`
0% {
  margin-top: -270px;
}
5% {
  margin-top: -180px;
}
33% {
  margin-top: -180px;
}
38% {
  margin-top: -90px;
}
66% {
  margin-top: -90px;
}
71% {
  margin-top: 0px;
}
99.99% {
  margin-top: 0px;
}
100% {
  margin-top: -270px;
}`;

const Colors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: 5s ${show} linear infinite;
`;

const Color = styled.span`
  height: 45px;
  padding: 12px 12px;
  margin-bottom: 45px;
  color: white;
  background-color: #f0a383;
  &:first-child {
    background-color: #a77b60;
  }
  &:last-child {
    background-color: #5284ce;
  }
`;

export default () => (
  <Container>
    <HomeContainer>
      <Span>안녕하세요.</Span>
      <ColorBox>
        <Colors>
          <Color>신입 웹 개발자</Color>
          <Color>성장하는</Color>
          <Color>배움을 즐기는</Color>
        </Colors>
      </ColorBox>
      <Span>배누리 입니다.</Span>
    </HomeContainer>
  </Container>
);
