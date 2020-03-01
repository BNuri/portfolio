import React from "react";
import ProjectPresenter from "./ProjectsPresenter";
import data from "../../data";
import { connect } from "react-redux";
import { fetchProjects } from "../../action/projects";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

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
    return (
      <ProjectPresenter loading={loading} projects={this.props.projects} />
    );
  }
}

const projectsStateToProps = state => {
  return {
    projects: [...state.projects.projects]
  };
};

export default connect(projectsStateToProps, {
  fetchProjects
})(Projects);
