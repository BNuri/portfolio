import React from "react";
import ProjectPresenter from "./ProjectsPresenter";
import data from "../../data";
import { connect } from "react-redux";
import { fetchProjectsActionCreator } from "../../modules/projects";

class Projects extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    try {
      this.props.fetchProjects(data);
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;
    const { projects = [] } = this.props;
    return <ProjectPresenter data={projects} loading={loading} />;
  }
}

export default connect(({ projects }) => ({ projects: projects.all }), {
  fetchProjects: fetchProjectsActionCreator
})(Projects);
