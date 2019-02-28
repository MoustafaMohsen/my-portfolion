export class workDialog {
  title?: string;
  description?: string;
  images?: Image[];
  buttons?: Button[];
}

export class Image {
  src?: string = "";
  alt?: string = "";
}
export class Button {
  text?: string = "";
  style?: any;
  class?: string = "";
}

// =================  interfaces
export interface workCard {
  title: string;
  subtitle?: string;
  description: string;
  innerDescription?:string;
  resources_Images: string[];
  deployment_Images: string[];
  backgroundClass?: string;
  backgroundImages?: string[];
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
export interface AboutMeCard {
  title: string;
  subtitle: string;
  description: string;
  backtext: string;
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
  smallImagesTitle: string;
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
  email:string;
}
export interface FooterSection{
  github:string;
  linkedin:string;
  rights:string;
}
