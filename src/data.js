// {
//     title: "제목",
//     description: "설명",
//     stack: [],
//     imagePath: "",
//     siteLink: "",
//     gitHubLink: ""
//   }

const projects = [
  {
    id: "3",
    title: "Portfolio",
    description: `React, Redux를 사용하여 개발한 포트폴리오 사이트입니다.`,
    stack: ["React", "Redux", "ES6"],
    imagePath: "/portfolio.png",
    siteLink: "",
    gitHubLink: ""
  },
  {
    id: "2",
    title: "Nomflex",
    description: `React를 공부하여 개발한 영화 정보 조회 사이트입니다. 
      MovieAPI에서 데이터를 가져와서 영화, TV 정보를 조회할 수 있습니다. 
      Netlify에 배포하였습니다.`,
    stack: ["React", "ES6"],
    imagePath: "/nomflex.png",
    siteLink: "https://goofy-knuth-6c2cbf.netlify.com/#/",
    gitHubLink: "https://github.com/BNuri/nomflex"
  },
  {
    id: "1",
    title: "Wetube",
    description: `NodeJS, Express, MongoDB를 공부하며 개발한 유트브 클론 사이트입니다. 
    Github, Facebook 혹은 이메일을 통해 회원가입을 할 수 있습니다. 
    동영상을 녹화하거나 업로드할 수 있으며, 조회할 수 있습니다. 
    파일은 AWS S3로 관리하고 있으며, heroku에 배포하였습니다.`,
    stack: ["ES6", "Express", "PUG", "SCSS"],
    imagePath: "/wetube.png",
    siteLink: "https://whispering-ocean-42081.herokuapp.com",
    gitHubLink: "https://github.com/BNuri/wetube"
  }
];

export default projects;
