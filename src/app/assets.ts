import { workCard, WorkSection, PlatformsSection, SkillsSection, ContactSection, FooterSection } from "./models";
//TODO: change email to some gmail account , it's visable
//TODO: add your eduaction
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

  fridgenotes_desktop: `${AppHost}${mocksPath}` + "fridgenotes-desktop.jpg",
  fn_1: `${AppHost}${mocksPath}` + "fn/2/fn_1.jpg",
  fn_2: `${AppHost}${mocksPath}` + "fn/2/fn_2.jpg",
  fn_3: `${AppHost}${mocksPath}` + "fn/2/fn_3.jpg",
  fn_4: `${AppHost}${mocksPath}` + "fn/2/fn_4.jpg",
  fn_5: `${AppHost}${mocksPath}` + "fn/2/fn_5.jpg",
  fn_6: `${AppHost}${mocksPath}` + "fn/2/fn_6.jpg",
  islamic_search_desktop: `${AppHost}${mocksPath}` + "islamic-search-laptop.png",
  is_1: `${AppHost}${mocksPath}` + "is/is_1.jpg",
  is_2: `${AppHost}${mocksPath}` + "is/is_2.jpg",
  ca_1: `${AppHost}${mocksPath}` + "css-angular/ca_1.jpg",
  ca_2: `${AppHost}${mocksPath}` + "css-angular/ca_2.jpg",
  ca_3: `${AppHost}${mocksPath}` + "css-angular/ca_3.jpg",
  email_verfication_desktop: `${AppHost}${mocksPath}` + "email-verfication.jpg",
  class_library_desktop: `${AppHost}${mocksPath}` + "csharp_window.png",
  string_comaprator_desktop_1: `${AppHost}${mocksPath}` + "array-comparator.jpg",
  string_comaprator_desktop_2: `${AppHost}${mocksPath}` + "arrays.png",
  jwt: `${AppHost}${mocksPath}` + "jwt.jpg",
  core_identity_desktop_1: `${AppHost}${mocksPath}` + "core_identity_1.jpg",
  core_identity_desktop_2: `${AppHost}${mocksPath}` + "core_identity_2.jpg",
  core_identity_desktop_3: `${AppHost}${mocksPath}` + "core_identity_3.jpg",

  site_reader_1: `${AppHost}${mocksPath}` + "site-reader_1.jpg",
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
/*
setTimeout(() => {
  document.querySelectorAll('.section-header-description').forEach(x=>{
    x.setAttribute("contenteditable","true")
    });
    document.querySelectorAll('.inner-about-card')[0].setAttribute("contenteditable","true")
}, 3000);
*/

let skillsDescription=`I Speak`

let platformsDescription=`I have working experience with different frameworks which allow me to work with the best suited framework for your project.`;

let WorkDescription=`Here are some of my projects I'm passionate about, More at my 
<a class="description-a" target="_blank" href="https://github.com/moustafamohsen"> GitHub </a>`

let ContactDescription=`I can help you make your Idea or Web App come to life, just let me handle it 
<br>
<span class="highlight"><a class="highlight normalize-anchor" href="mailto:contact@moustafamohsen.com" >Contact@moustafamohsen.com</a></span>
`

let aboutMeCardDescription=
`I'm Moustafa Mohsen, a 23-year-old creative full-stack developer and problem solver, with a 4-year background in building and implementing web applications, I've worked with many people and started my own business, Self-motivated because I'm genuinely passionate about programming, resolving challenges is thrilling.
<br/><br/>
If you would like to find out more about me or my work proccess please reach out by sending me an email at contact@moustafamohsen.com or using this contact form, Currently I'm available  for freelance work as well as contract hiring and am actively pursuing projects.`

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
    title: "css-to-angular-animations",
    subtitle: "Node.js",
    description: `use <code>npx css-angular animate.css</code> to convert .css file to .ts angular animation file`,
    innerDescription:
`-Reads CSS file and extract css @keyframes and classes
-converts the @keyframes to angular animations methods keyframes([...])
-converts the css classes to angular styles methods style({...})
-saves both angular animations and styles as as const in the output .ts file ready to use in your angular app.`,
    backgroundImages:[Availableimages.ca_3],    
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
      Availableimages.workcard.heroku
    ],
    buttonsText: [
      {
        link: "https://github.com/MoustafaMohsen/css-to-angular-animations-and-styles",
        text: "Github",
        type: "project"
      },
      {
        link: "https://www.npmjs.com/package/css-angular",
        text: "NPM",
        type: "project"
      }
    ]
  },
  {
    title: "Fridge Notes",
    subtitle: "Angular + ASP.NET CORE",
    description: `Have you ever forgot your usual grocery, this project can help you, just add your grocery once and share them with your roommate or family so they know what to buy in their way home, you remember your grocery are next time.`,
    innerDescription:
`- Uses Angular 7 as front end designed with Material Design concepts in mind
- ASP.NET Core 2.1 as a backend and Docker Container
- The ability to register users, implementing ASP.NET Identity
- Users and friends to synchronize the list with them
- Manage friends page to Delete, Invite or add friends to your FridgeNotes account
- OAuth2 to login using Facebook or Google account
- MySQL Database to stores the user’s items
- Registration email confirmation to prevent spam
- Angular Animations to improve the user experience`,
    backgroundImages:[
      Availableimages.fn_1,
      Availableimages.fn_2,
      Availableimages.fn_3,
      Availableimages.fn_4,
      Availableimages.fn_5,
      Availableimages.fn_6
    ],
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
      Availableimages.workcard.heroku,
      Availableimages.workcard.digitalocean,
    ],
    buttonsText: [
      {
        link: "https://fridgenotes.moustafamohsen.com",
        text: "Visit site",
        type: "website"
      },
      {
        link: "https://github.com/MoustafaMohsen/fridge-notes-front",
        text: "Github Front-end page",
        type: "project"
      },
      {
        link: "https://github.com/MoustafaMohsen/fridge-notes-api",
        text: "Github Back-end",
        type: "project"
      }
    ]
  },
  {
    title: "Islamic Search",
    subtitle: "Angular + ASP.NET CORE",
    description: `Search any references or sources from different books, one place that connects all the different book references`,
    innerDescription:
`- uses Angular 7 as front end and Material Design concepts
- ASP.NET Core 2.1, LINQ Query SQLite as Database in the backend
- Many-to-many relationships database to store multiple references of multiple blocks of text
- Angular Reactive Forms and Form Validation to check the references against local rules and a small database`,
    backgroundImages:[Availableimages.is_1,Availableimages.is_2],    
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
      Availableimages.workcard.heroku
    ],
    buttonsText: [
      {
        link: "https://islamicsearch.moustafamohsen.com",
        text: "Visit site",
        type: "website"
      },
      {
        link: "https://github.com/MoustafaMohsen/islamic-search",
        text: "Github Front-end",
        type: "project"
      },
      {
        link: "https://github.com/MoustafaMohsen/islamic-search-api",
        text: "Github Back-end",
        type: "project"
      }
    ]
  }
];

let otherProjects: workCard[] = [
  {
    title: "Core User Identity",
    subtitle: ".NET Class library",
    description: `open-source .NET Class library and NuGet Package that helps in the implementation of ASP.NET Identity`,
    innerDescription:
    `- Helper service to handle login, register, update, delete, roles and other functionalities
- JWT tokens authentication, JWT tokens reader
- Controller attributes for authentication with roles
- OAuth2 Login with Facebook or Google
- User Roles management Service to add, remove or update user Roles
- Email verification sender with VerficationEmailSender Package`,
    backgroundImages:[Availableimages.core_identity_desktop_3],
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
        link: "https://github.com/MoustafaMohsen/CoreUserIdentity",
        text: "Project page",
        type: "project"
      }
    ]
  },
  {
    title: "MLiberary",
    subtitle: ".NET Class library",
    description: `open-source C# .NET Class library and NuGet Package with static methods that is used alot across different applications.`,
    innerDescription:
    `- Encryption and Decryption Helper
- DateTime Converter helpers (e.g. Unix Time to DateTime and reverse)
- Other functions like file Reader, Random string generator, Base64DecodeEncode, etc.
- Updated every time I think a new function could be helpful in general`,
    backgroundImages:[Availableimages.class_library_desktop],    
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
        link: "https://github.com/MoustafaMohsen/MLiberary",
        text: "Project page",
        type: "project"
      }
    ]
  },
  {
    title: "String Comparator",
    subtitle: "Node.js",
    description: `open-source TypeScript Node.js module to compare an arrays of string against another, and return the matching results of each element.`,
    innerDescription:
`- Compare each element of the master array to a slave array and save the matching result if general similarities reached a custom threshold
- Similarities are determined by the percentage of words found in both strings being compared, and the skew if of words in slave string
- Custom Index, Range Index and Dynamic Index, that could be helpful if the two arrays are very large and the similarities are usually together, like different versions of the same book.
- Range index to set the max and minimum index to search in the slave index relative to the current master index
- Dynamic range that changes the relative index based on similarities found in previous matches
- Ignore Custom words and not match it in the search results.
`,
    backgroundImages:[Availableimages.string_comaprator_desktop_1],    
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
        link: "https://github.com/MoustafaMohsen/string-array-comparator",
        text: "Project page",
        type: "project"
      }
    ]
  },
  {
    title: "Email Verification Sender",
    subtitle: ".NET Class library",
    description: `open-source .NET Class library and NuGet Package to send confirmation email to users.`,
    innerDescription:
`- Custom Email Template
- Uses SendGrid Email API
- Response Result`,
    backgroundImages:[Availableimages.email_verfication_desktop],    
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
        link: "https://github.com/MoustafaMohsen/VerficationEmailSender",
        text: "Project page",
        type: "project"
      }
    ]
  },
  {
    title: "Sites Reader",
    subtitle: "Node.js",
    description: `Sites Reader is TypeScript Node.js module that recursively looks through thousands of web pages and it's html content to find an id in each page and save every matching content in an easy to use json format, it looks through the specified html element and pulls out it's text content to an object that contains the text's parent class, id, styles and other attributes, then add this object to the results array, thus converting a recursive html element to simple text object array`,
    innerDescription:
`- looks through thousands of webpages based on URL query function as a parameter
- Stops looking based on URL query function as a parameter
- parse the the html content and find the specified id in the html file for save
- returns a CustomHTMLObjectArray with refrences of each url used to generate this object
- can save the original html text for each match`,
    backgroundImages:[Availableimages.site_reader_1],    
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
        link: "https://github.com/MoustafaMohsen/sites-reader",
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
    description:aboutMeCardDescription,
    backtext:'About'
}


// export variables
export const workSection: WorkSection = {
  title: "Work",
  description:WorkDescription,
  mainProjects: mainProjects,
  otherProjects: otherProjects
};

export const platformsSection: PlatformsSection = {
  title: "Platforms",
  description: platformsDescription,
  smallImagesTitle:`also other services & libraries like:`,
  bigImages: platformsBigImages,
  smallImages: platformsSmallImages,
  servicesImages: platformsServicesImages
};

export const skillsSection: SkillsSection = {
  title: "Skills",
  description: skillsDescription,
  bigImages: skillsBigImages,
  smallImages: skillsSmallImages
};

export const contactSection : ContactSection={
    title:"Contact Me",
    description:ContactDescription,
    aboutMeCard:aboutMeCard,
    email:"Contact@moustafamohsen.com",
    formspreeapikey:"401b90c214b7672aa7633e3cff57cbd639e7456401f8c00cdc3c3f9e",
    formEmail:"hiphusk@gmail.com",
    filterThreats:false
}

export const footerSection:FooterSection={
  github:"https://github.com/moustafamohsen",
  linkedin:"https://www.linkedin.com/in/moustafamohsen/",
  rights: `©${new Date().getFullYear()} Moustafa Mohsen`
}
export const siteTitle:string="Moustafa Mohsen | Full stack web developer"

export const traceId = "UA-135974249-1";


let logMessage = `Email I you want my resume`

console.log(logMessage,'contact@moustafamohsen.com');