import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Introduce = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`;

const Image = styled.div`
  height: 80px;
  width: 80px;
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
`;

const DescUl = styled.ul`
  margin-left: 20px;
`;

const DescLi = styled.li`
  margin-top: 10px;
`;

const Careers = styled.div``;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Career = styled.div`
  margin-top: 20px;
`;

const Company = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Period = styled.span`
  font-size: 16px;
  opacity: 0.7;
`;

const Details = styled.ul`
  margin-top: 20px;
`;

const Detail = styled.li`
  margin-bottom: 10px;
  &:before {
    content: "- ";
  }
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
        <DescLi>React를 이용한 Front-end 개발에 관심이 많습니다.</DescLi>
        <DescLi>문제를 효율적인 방식으로 해결하는 개발자가 목표입니다.</DescLi>
      </DescUl>
    </Introduce>
    <Title>Career</Title>
    <Careers>
      <Career>
        <Company>아이라자스</Company>
        <Period>2019.02 ~ 2019.10 (8개월)</Period>
        <Details>
          <Detail>기존 프로젝트를 반응형 웹으로 수정 (부트스트랩)</Detail>
          <Detail>
            대회 참가등록 확인 페이지 개발, cafe24로 배포 (Express){" "}
          </Detail>
          <Detail>
            프로젝트 기획 및 테스트 (요구사항 정의, 기능 정의, 화면 정의, 테이블
            정의 및 문서화)
          </Detail>
        </Details>
      </Career>
    </Careers>
  </Container>
);
