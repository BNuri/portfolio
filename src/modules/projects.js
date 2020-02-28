const { handleActions } = require("redux-actions");

const FETCH_PROJECTS = "FETCH_PROJECTS";

const initialState = {
  projects: []
};

module.exports = {
  fetchProjectsActionCreator: projects => ({
    type: FETCH_PROJECTS,
    projects
  }),
  reducer: handleActions(
    {
      [FETCH_PROJECTS]: (state, action) => ({
        ...state,
        all: action.projects
      })
    },
    initialState
  )
};
