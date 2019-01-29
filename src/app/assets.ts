// app host
export const AppHost = location.href.split(/\?|#/)[0];

//images path
const PlatformsCardPath = "assets/img/Framworks and platforms/work-card/";
const PlatformsPath = "assets/img/Framworks and platforms/";
const ProgramingPath = "assets/img/Programing languages/";
const ServicesPath = "assets/img/Services/";
const mocksPath = PlatformsCardPath + "mocks/";

export const Availableimages = {
  workcard: {
    angular: `${AppHost}${PlatformsCardPath}` + "angular.png",
    aspcore: `${AppHost}${PlatformsCardPath}` + "asp.net core.png",
    github: `${AppHost}${PlatformsCardPath}` + "github.png",
    mysql: `${AppHost}${PlatformsCardPath}` + "mysql.png",
    sqlite: `${AppHost}${PlatformsCardPath}` + "sqlite.png",
    digitalocean: `${AppHost}${PlatformsCardPath}` + "digitalocean.png",
    heroku: `${AppHost}${PlatformsCardPath}` + "heroku.png"
  },

  fridgenotes_desktop: `${AppHost}${mocksPath}` + "fridgenotes-desktop.png",

  dotnet: `${AppHost}${PlatformsPath}` + "dotnet.png",
  wordpress: `${AppHost}${PlatformsPath}` + "wordpress.png",
  nodejs: `${AppHost}${PlatformsPath}` + "nodejs.png",

  csharp: `${AppHost}${ProgramingPath}` + "csharp.png",
  css: `${AppHost}${ProgramingPath}` + "css.png",
  sass: `${AppHost}${ProgramingPath}` + "sass.png",
  js: `${AppHost}${ProgramingPath}` + "js.png",
  ts: `${AppHost}${ProgramingPath}` + "ts.png",
  html: `${AppHost}${ProgramingPath}` + "html.png",
  php: `${AppHost}${ProgramingPath}` + "php.png",

  docker: `${AppHost}${ServicesPath}` + "docker.png",
  git: `${AppHost}${ServicesPath}` + "git.png",
  npm: `${AppHost}${ServicesPath}` + "npm.png",
  npm_red: `${AppHost}${ServicesPath}` + "npm_red.png",
  nuget: `${AppHost}${ServicesPath}` + "nuget.png",
  rxjs: `${AppHost}${ServicesPath}` + "rxjs.png",
  jquery: `${AppHost}${ServicesPath}` + "jquery.png"
};

// ================== variables

//skills
let skillsSmallImages = [Availableimages.php, Availableimages.sass];

let skillsBigImages = [
  Availableimages.csharp,
  Availableimages.ts,
  Availableimages.js,
  Availableimages.html,
  Availableimages.css
];

//platfomrs
let platformsServicesImages = [
  Availableimages.git,
  Availableimages.npm,
  Availableimages.nuget,
  Availableimages.docker,
  Availableimages.jquery,
  Availableimages.rxjs
];

let platformsSmallImages = [Availableimages.wordpress, Availableimages.nodejs];

let platformsBigImages = [
  Availableimages.workcard.angular,
  Availableimages.workcard.aspcore,
  Availableimages.dotnet
];

let Projects: workCard[] = [
  {
    title: "Islamic Search",
    subtitle: "Angular project",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,

    backgroundClass: "islamic-search-background",
    languages: "Html, CSS, C#, TypeScript",
    buttonText: "LEARN MORE",
    resources_Images: [
      Availableimages.workcard.angular,
      Availableimages.workcard.aspcore,
      Availableimages.workcard.sqlite
    ],
    deployment_Images: [
      Availableimages.workcard.github,
      Availableimages.workcard.heroku
    ],
    buttonsText: [
      {
        link: "",
        text: "Visit site",
        type: "project"
      },
      {
        link: "",
        text: "Project page",
        type: "website"
      }
    ]
  },
  {
    title: "Fridge Notes",
    subtitle: "C# class liberary",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,

    backgroundClass: "fridge-notes-background",
    languages: "Html, CSS, C#, TypeScript",
    buttonText: "LEARN MORE",
    resources_Images: [
      Availableimages.workcard.angular,
      Availableimages.workcard.aspcore,
      Availableimages.workcard.mysql
    ],
    deployment_Images: [
      Availableimages.workcard.github,
      Availableimages.workcard.heroku,
      Availableimages.workcard.digitalocean
    ],
    buttonsText: [
      {
        link: "https://google.com",
        text: "Visit site",
        type: "website"
      },
      {
        link: "https://google.com",
        text: "Project page",
        type: "project"
      }
    ]
  }
];

//contact
let aboutMeCard={
    title:"About Me.",
    subtitle:"front-end/back-end developer",
    description:`I'm Moustafa Mohsen, a 23 years-old Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos odit nostrum, ducimus adipisci? Assumenda ullam nulla id natus!`,
    backtext:'About'
}


// export variables
export const workSection: WorkSection = {
  title: "Work",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos",
  mainProjects: Projects,
  otherProjects: null
};

export const platformsSection: PlatformsSection = {
  title: "Platforms",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos odit nostrum, ducimus adipisci? Assumenda ullam nulla id natus!? `,
  bigImages: platformsBigImages,
  smallImages: platformsSmallImages,
  servicesImages: platformsServicesImages
};

export const skillsSection: SkillsSection = {
  title: "Skills",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos odit nostrum, ducimus adipisci? Assumenda ullam nulla id natus!? `,
  bigImages: skillsBigImages,
  smallImages: skillsSmallImages
};

export const contactSection : ContactSection={
    title:"Contact Me",
    description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos odit nostrum, ducimus adipisci? Assumenda ullam nulla id natus`,
    aboutMeCard:aboutMeCard
}

// =================  interfaces
export interface workCard {
  title: string;
  subtitle?: string;
  description: string;
  resources_Images: string[];
  deployment_Images: string[];
  backgroundClass?: string;
  backgroundImage?: string;
  style?: any;
  languages: string;
  buttonText: string;

  viewclass?: string;

  buttonsText: {
    link: string;
    text: string;
    type: string;
  }[];
}
export interface AboutMeCard{
    title:string;
    subtitle:string;
    description:string;
    backtext:string;
}
export interface WorkSection {
  title: string;
  description: string;
  mainProjects: workCard[];
  otherProjects: workCard[];
}

export interface PlatformsSection {
  title: string;
  description: string;
  servicesImages: string[];
  smallImages: string[];
  bigImages: string[];
}

export interface SkillsSection {
  title: string;
  description: string;
  smallImages: string[];
  bigImages: string[];
}

export interface ContactSection {
    title: string;
    description: string;
    aboutMeCard: AboutMeCard;
}
  