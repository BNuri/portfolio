import asyncComponent from "../asyncComponent";

export const Home = asyncComponent(() => import("./Home"));
export const Projects = asyncComponent(() => import("./Projects"));
export const About = asyncComponent(() => import("./About"));
export const Contact = asyncComponent(() => import("./Contact"));
