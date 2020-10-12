import Typewriter from 'typewriter-effect/dist/core';

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
  innerDescription?: string;
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
  email: string;
  formspreeapikey: string;
  formEmail: string;
  filterThreats: boolean
}
export interface FooterSection {
  github: string;
  linkedin: string;
  rights: string;
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
export interface ITypewriterOptions {
  strings?: Array<string>,
  cursor: string,
  delay: 'natural' | number,
  deleteSpeed: 'natural' | number,
  loop: boolean,
  autoStart: boolean,
  devMode: boolean,
  wrapperClassName: string,
  cursorClassName: string,
}

export interface ITypewriter {
  constructor(container: string | HTMLElement, options: ITypewriterOptions);

  start(): ITypewriter;
  stop(): ITypewriter;
  pause(): ITypewriter;
  pauseFor(ms: number): ITypewriter;
  typeString(string: string): ITypewriter;
  deleteAll(speed?: 'natural' | number): ITypewriter;
  changeDeleteSpeed(speed: number): ITypewriter;
  changeDelay(delay: number): ITypewriter;
  deleteChars(amount: number): ITypewriter;
  callFunction(callback: Function, thisArg: Object): ITypewriter;
  state
}




import { Power0, Power3, TimelineMax } from 'gsap';

export enum TweenAnimation {
  FadeInUp,
  fadeOutDown,
  FadeIn,
  FadeOut
}
export class TweenAnimate {
  constructor(private selector?: string, private animation?: TweenAnimation) {
  }

  animations = {
    fadeOutDown: { opacity: '0', transform: 'translate3d(0, 100%, 0)' },
    fadeInUp: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
    fadeIn: { opacity: '1' },
    fadeOut: { opacity: '0' },
  }
  tl0: TimelineMax;
  Dur1 = 1;
  Delay1 = 0;
  inView = false;
  didRun = false;
  typewriter: ITypewriter;
  typewriter2: ITypewriter;
  typeText = "";
  Tween(tween?: TimelineMax) {
    if (tween) {
      this.tl0 = tween;
      return;
    }
    this.tl0 = new TimelineMax();

    switch (this.animation) {
      case TweenAnimation.FadeInUp:
        this.tl0.fromTo(this.selector, this.Dur1, this.animations.fadeOutDown, this.animations.fadeInUp).pause();
        break;
      case TweenAnimation.fadeOutDown:
        this.tl0.fromTo(this.selector, this.Dur1, this.animations.fadeInUp, this.animations.fadeOutDown).pause();
        break;
      case TweenAnimation.FadeIn:
        this.tl0.fromTo(this.selector, this.Dur1, this.animations.fadeOut, this.animations.fadeIn).pause();
        break;
      case TweenAnimation.FadeOut:
        this.tl0.fromTo(this.selector, this.Dur1, this.animations.fadeIn, this.animations.fadeOut).pause();
        break;
      default:
        break;
    }
  }

  async play(speed = 1) {
    let tl0Return = new Promise((resolve, reject) => {
      this.tl0.timeScale(speed).play().eventCallback("onComplete", () => { resolve() });
    });
    return tl0Return;
  }

  async reverse(speed = 1) {
    return new Promise((resolve, reject) => {
      this.tl0.timeScale(speed).reverse().eventCallback("onComplete", () => { resolve() });
    })
  }

  restart(rest = 0.1, speed = 5) {
    return new Promise((resolve, reject) => {
      this.reverse(speed).then(() => {
        setTimeout(() => {
          this.play().then(() => { resolve() });
        }, (rest) * 1000);
      });
    })

  }

  clipperTweenClass: TweenAnimate;
  revealerTweenClass: TweenAnimate;
  secondText: TweenAnimate;

  revealTextAnimation(textElement, revealerElement, RevealeTextEle, typewriterDelay = 75) {
    this.clipperTweenClass = new TweenAnimate();
    this.revealerTweenClass = new TweenAnimate();
    this.secondText = new TweenAnimate();
    let ease = Power0.easeIn;
    let ease2 = Power3.easeOut;
    var clipper = new TimelineMax();
    clipper
      .from(textElement, 0, { "clip-path": "inset(0% 100% 0% 0%)", ease })
      .to(textElement, 0.95, { "clip-path": "inset(0% 0% 0% 0%)", ease: ease2 })
      .to(textElement, 1, { "clip-path": "inset(0% 0% 0% 0%)", ease: ease2 })
      .pause()
    this.clipperTweenClass.Tween(clipper);

    // == logo
    var revealer = new TimelineMax();
    revealer
      .from(revealerElement, 0, { "width": "0%", ease })
      .to(revealerElement, 0.95, { "width": "100%", transform: "scaleX(1)", "transform-origin": "100% 0%", ease: ease2 })
      .to(revealerElement, 1, { transform: "scaleX(0)", ease: ease2 })
      .pause()

    this.revealerTweenClass.Tween(revealer);

    // type effect
    this.secondText.typewriter = new Typewriter(RevealeTextEle, {
      loop: false,
      cursor: "",
      autoStart: false,
      delay: typewriterDelay,
      skipAddStyles: true,
    });


  }
  playRevealTextAnimation(Delay = 0, speed = 2, typewriterPauseFor = 500) {
    setTimeout(() => {
      this.clipperTweenClass.didRun = this.revealerTweenClass.didRun = this.secondText.didRun = true
      this.clipperTweenClass.play(speed);
      this.revealerTweenClass.play(speed);
      this.secondText.typeText = "Full Stack Web Developer"
      this.secondText.typewriter.pauseFor(typewriterPauseFor).typeString(this.secondText.typeText).start();

    }, Delay * 1000);

  }

  reverseRevealTextAnimation(Delay = 0, speed = 2, typewriterPauseFor = 500) {
    setTimeout(() => {
      this.clipperTweenClass.didRun = this.revealerTweenClass.didRun = this.secondText.didRun = true
      this.clipperTweenClass.reverse(speed);
      this.revealerTweenClass.reverse(speed);
      this.secondText.typewriter.state.eventLoop = null;
      this.secondText.typewriter.state.eventQueue = [];

      this.secondText.typewriter
        // .pause()
        // .stop()
        .changeDeleteSpeed(1)
        .deleteAll(0)
        .start();

    }, Delay * 1000);

  }
}
