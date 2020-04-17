import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useFetch } from "../hooks/useFetch";
import { connect } from "react-redux";
import { fetchProjects } from "../action/projects";
import media from "../Components/media";
import LazyLoadingBackImage from "../Components/LazyLoadingBackImage";
import Loader from "../Components/Loader";

const Container = styled.main`
  padding: 50px;
  ${media.mobile`padding: 20px`};
`;

const Project = styled.section`
  margin-bottom: 80px;
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

const Desc = styled.ul`
  line-height: 1.8;
`;

const DescLi = styled.li`
  &:before {
    content: "- ";
  }
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
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

const Projects = ({ projects }) => {
  const { loading } = useFetch();
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {projects.map((project) => (
        <Project key={project.id}>
          <ImageContainer>
            <LazyLoadingBackImage
              src={require(`../assets/${project.imagePath}`)}
              placeholder={require(`../assets/loading.png`)}
              height={"200px"}
              width={"auto"}
            />
          </ImageContainer>
          <Content>
            <Title>{project.title}</Title>
            <Desc>
              {project.description.map((des) => (
                <DescLi>{des}</DescLi>
              ))}
            </Desc>
            <StackContainer>
              {project.stack.map((s) => (
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
};

Projects.propTypes = {
  loading: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.array.isRequired,
      stack: PropTypes.array.isRequired,
      imagePath: PropTypes.string.isRequired,
      siteLink: PropTypes.string.isRequired,
      gitHubLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const projectsStateToProps = (state) => {
  return {
    projects: [...state.projects.projects],
  };
};

export default connect(projectsStateToProps, {
  fetchProjects,
})(Projects);
