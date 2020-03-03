import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import media from "../../Components/media";
import LazyLoadingBackImage from "../../Components/LazyLoadingBackImage";

const Container = styled.div`
  padding: 50px;
  ${media.mobile`padding: 20px`};
`;

const Project = styled.div`
  margin-bottom: 50px;
  display: flex;
  ${media.mobile`flex-direction: column;`};
`;

const ImageContainer = styled.div`
  width: 40%;
  height: 200px;
  ${media.mobile`
    width: 100%;
    margin-bottom: 20px;
  `};
`;

const Content = styled.div`
  width: 60%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  ${media.mobile`
  width: 100%;
  margin-left: 0;
  align-items: center;
  `};
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  line-height: 1.8;
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Stack = styled.span`
  padding: 3px 8px;
  margin-right: 10px;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fef2f1;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.a`
  width: 150px;
  display: inline-block;
  margin: 5px;
  padding: 12px 10px;
  background-color: #fdf3f1;
  color: #f05742;
  font-weight: 700;
  border-radius: 50px;
  text-align: center;
  border-bottom: solid 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s linear;
  &:active {
    transform: translateY(3px);
    border-bottom: none;
  }
  ${media.mobile`
    width: 120px; 
    padding: 12px 0;
  `}
`;

const ProjectPresenter = ({ loading, projects }) =>
  loading ? (
    <span role="img" aria-label="loading">
      ⏳
    </span>
  ) : (
    <Container>
      {projects.map(project => (
        <Project key={project.id}>
          <ImageContainer>
            <LazyLoadingBackImage
              src={require(`../../assets/${project.imagePath}`)}
              placeholder={require(`../../assets/loading.png`)}
              height={"200px"}
              width={"auto"}
            />
          </ImageContainer>
          <Content>
            <Title>{project.title}</Title>
            <Desc>{project.description}</Desc>
            <StackContainer>
              {project.stack.map(s => (
                <Stack key={s}>{s}</Stack>
              ))}
            </StackContainer>
            <ButtonContainer>
              <Button
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-hand-point-right" /> Go to Site
              </Button>
              <Button
                href={project.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" /> GitHub
              </Button>
            </ButtonContainer>
          </Content>
        </Project>
      ))}
    </Container>
  );

ProjectPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  projects: PropTypes.array
};

export default ProjectPresenter;
