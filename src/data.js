const projects = [
  {
    id: "4",
    title: "Typerz",
    description: [
      `Typescript, React를 사용하여 만든 타자 연습 사이트입니다.`,
      `Express를 이용하여 api 서버를 만들어 사용하였습니다.`,
      `글을 등록할 수 있으며, 타자 연습을 할 수 있습니다.`,
      `연습이 끝난 후에 랭킹을 확인할 수 있습니다.`,
    ],
    stack: ["Typescript", "React"],
    imagePath: "typerz.png",
    siteLink: "https://agitated-pasteur-cee57f.netlify.com/#/",
    gitHubLink: "https://github.com/BNuri/typerz",
  },
  {
    id: "3",
    title: "Portfolio",
    description: [`프로젝트를 소개하는 포트폴리오 사이트입니다.`],
    stack: ["React", "Redux"],
    imagePath: "portfolio.png",
    siteLink: "https://www.bnuri.me",
    gitHubLink: "https://github.com/BNuri/portfolio",
  },
  {
    id: "2",
    title: "Nomflex",
    description: [
      `영화 정보 조회 사이트입니다.`,
      `MovieAPI에서 데이터를 가져와서 사용했습니다.`,
      `영화, TV의 인기 리스트, 방영 리스트 및 상세 페이지를 조회할 수 있습니다.`,
      `Netlify에 배포하였습니다.`,
    ],
    stack: ["React"],
    imagePath: "nomflex.png",
    siteLink: "https://goofy-knuth-6c2cbf.netlify.com",
    gitHubLink: "https://github.com/BNuri/nomflex",
  },
  {
    id: "1",
    title: "Wetube",
    description: [
      `동영상 공유 사이트입니다.`,
      `Github, Facebook 혹은 이메일을 통해 회원가입을 할 수 있습니다.`,
      `동영상을 녹화하거나 업로드할 수 있으며, 조회할 수 있습니다.`,
      `파일은 AWS S3로 관리하고 있으며, heroku에 배포하였습니다.`,
    ],
    stack: ["NodeJS", "ES6", "Express", "MongoDB"],
    imagePath: "wetube.png",
    siteLink: "https://whispering-ocean-42081.herokuapp.com",
    gitHubLink: "https://github.com/BNuri/wetube",
  },
];

export default projects;
