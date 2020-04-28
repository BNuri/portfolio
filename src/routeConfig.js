import { Home, Projects, About, Contact } from "./Screens";
import { getProjects } from "./action/projects";

export default [
  {
    exact: true,
    path: "/",
    component: Home,
    preload: (store, params, ctx) => {
      return Promise.resolve();
    },
  },
  {
    exact: true,
    path: "/projects",
    component: Projects,
    preload: (store, params, ctx) => {
      return store.dispatch(getProjects());
    },
  },
  {
    exact: true,
    path: "/about",
    component: About,
    preload: (store, params, ctx) => {
      return Promise.resolve();
    },
  },
  {
    exact: true,
    path: "/contact",
    component: Contact,
    preload: (store, params, ctx) => {
      return Promise.resolve();
    },
  },
];
