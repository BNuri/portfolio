import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProjects } from "../action/projects";
import media from "../Components/media";
import LazyLoadingBackImage from "../Components/LazyLoadingBackImage";
import Button from "../Components/Button";

const Container = styled.main`
  padding: 50px;
  ${media.mobile`padding: 20px`};
`;

const Project = styled.section`
  margin-bottom: 80px;
  display: flex;
  align-items: center;
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

const Projects = ({ projects }) => {
  return (
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
              {project.description.map((des, i) => (
                <DescLi key={i}>{des}</DescLi>
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
                icon={"faHandPointRight"}
                name={`Go to Site`}
              />
              <Button
                href={project.gitHubLink}
                icon={"faGithub"}
                name={`GitHub`}
              />
            </ButtonContainer>
          </Content>
        </Project>
      ))}
    </Container>
  );
};

Projects.propTypes = {
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
  getProjects,
})(Projects);
