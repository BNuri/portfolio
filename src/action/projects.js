const FETCH_PROJECTS = "FETCH_PROJECTS";

function fetchProjects(projects) {
  return { type: FETCH_PROJECTS, projects };
}

export { FETCH_PROJECTS, fetchProjects };
