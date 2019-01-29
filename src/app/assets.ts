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
  islamic_search_desktop: `${AppHost}${mocksPath}` + "islamic-search-laptop.png",
  email_verfication_desktop: `${AppHost}${mocksPath}` + "email-verfication.jpg",
  class_library_desktop: `${AppHost}${mocksPath}` + "csharp_window.png",
  string_comaprator_desktop: `${AppHost}${mocksPath}` + "arrays.png",
  core_identity_desktop: `${AppHost}${mocksPath}` + "jwt.jpg",
  test:"https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
  
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

let mainProjects: workCard[] = [
  {
    title: "Fridge Notes",
    subtitle: "Angular project",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,
    backgroundImage:Availableimages.fridgenotes_desktop,
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
    title: "Islamic Search",
    subtitle: "Angular project",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,

    backgroundImage:Availableimages.islamic_search_desktop,    
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

let otherProjects: workCard[] = [
  {
    title: "Core User Identity",
    subtitle: "Angular project",
    description: `Class liberary to end a Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiat`,
    backgroundImage:Availableimages.core_identity_desktop,
    //backgroundClass: "islamic-search-background",
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
    title: "MLiberary",
    subtitle: "C# class liberary",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,

    backgroundImage:Availableimages.class_library_desktop,    
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
  },
  {
    title: "String Comparator",
    subtitle: "Node.js",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,

    backgroundImage:Availableimages.string_comaprator_desktop,    
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
        text: "Project page",
        type: "project"
      }
    ]
  },
  {
    title: "Email Verfication Sender",
    subtitle: "C# Class liberary",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,

    backgroundImage:Availableimages.email_verfication_desktop,    
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
  mainProjects: mainProjects,
  otherProjects: otherProjects
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
  