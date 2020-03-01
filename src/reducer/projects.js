import projectsAction from "../action/index";
import data from "../data";

const { FETCH_PROJECTS } = projectsAction.projects;

const initialState = {
  projects: data
};

const projects = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return Object.assign({}, state, {
        projects: state.projects
      });
    default:
      return state;
  }
};

export default projects;
