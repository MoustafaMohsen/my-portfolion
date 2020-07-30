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

export interface BlogSection {
  title: string;
  description: string;
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
  formspreeapikey:string;
  formEmail:string;
  filterThreats:boolean
}
export interface FooterSection{
  github:string;
  linkedin:string;
  rights:string;
}

export declare module Ipdata {

  export interface Language {
      name: string;
      native: string;
  }

  export interface Currency {
      name: string;
      code: string;
      symbol: string;
      native: string;
      plural: string;
  }

  export interface TimeZone {
      name: string;
      abbr: string;
      offset: string;
      is_dst: boolean;
      current_time: Date;
  }

  export interface Threat {
      is_tor?: boolean;
      is_proxy?: boolean;
      is_anonymous?: boolean;
      is_known_attacker?: boolean;
      is_known_abuser?: boolean;
      is_threat?: boolean;
      is_bogon?: boolean;
  }

  export interface Ipdata {
      ip: string;
      is_eu: boolean;
      city: string;
      region: string;
      region_code: string;
      country_name: string;
      country_code: string;
      continent_name: string;
      continent_code: string;
      latitude: number;
      longitude: number;
      asn: string;
      organisation: string;
      postal: string;
      calling_code: string;
      flag: string;
      emoji_flag: string;
      emoji_unicode: string;
      languages: Language[];
      currency: Currency;
      time_zone: TimeZone;
      threat: Threat;
      count: string;
  }

}


