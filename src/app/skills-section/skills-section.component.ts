import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
import { Availableimages, skillsSection } from "../assets";
import { DeviceDetectorService } from 'ngx-device-detector';
import * as $ from 'jquery';
import { TweenAnimate, TweenAnimation } from "../models";
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: "app-skills-section",
  templateUrl: "./skills-section.component.html",
  styleUrls: ["./skills-section.component.css"]
})
export class SkillsSectionComponent implements OnInit {
  constructor( private deviceService: DeviceDetectorService, private zone: NgZone) {}

  @ViewChild('titleElement') TitleEle: ElementRef;
  @ViewChild('descriptionElement') descriptionEle: ElementRef;

  title: string="";
  _title: string="";
  description: string;
  underscore:string;

  smallImages:string[];
  bigImages:string[];

  ngOnInit() {
    this._title = skillsSection.title;
    this.description = skillsSection.description;


    this.smallImages=skillsSection.smallImages

    this.bigImages=skillsSection.bigImages

  }//ngOnInit

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        // this.DescriptionFadeInUp.Tween();
        this.MainImagesFadeInUp.Tween();
        this.SmallImagesFadeInUp.Tween();
        this.OtherImagesFadeInUp.Tween();
      }, 100);
    })
  }


  inview = false;
  onInViewportChange(inViewport: boolean) {
    this.inview = inViewport;
  }


  // description
  DescriptionFadeInUp = new TweenAnimate();
  onDescriptionViewport(inViewport: boolean) {
    this.DescriptionFadeInUp.inView = inViewport;
    if (inViewport&&!this.DescriptionFadeInUp.didRun) {

      this.DescriptionFadeInUp.typewriter = new Typewriter(this.TitleEle.nativeElement, {
        loop: false,
        cursor: "",
        autoStart: false,
        // delay:'Natural',
      });

      this.DescriptionFadeInUp.typewriter2 = new Typewriter(this.descriptionEle.nativeElement, {
        loop: false,
        cursor: "",
        autoStart: false,
        // delay:50,
      });

    }

    if (inViewport) {
      this.zone.runOutsideAngular(() => {
        // this.DescriptionFadeInUp.play()
        if (this.DescriptionFadeInUp.didRun === false) {
          this.DescriptionFadeInUp.typewriter.typeString(this._title).start();
          this.DescriptionFadeInUp.typewriter2.typeString(this.description).start();
        }
      });
      this.DescriptionFadeInUp.didRun = true;
    }

    if (!inViewport && this.DescriptionFadeInUp.didRun) {
      this.zone.runOutsideAngular(() => {
        // this.DescriptionFadeInUp.reverse();
      });
    }
  }

  // Main Images
  MainImagesFadeInUp = new TweenAnimate('#skills .skills-main-images', TweenAnimation.FadeInUp);
  onMainImagesViewport(inViewport: boolean) {
    this.MainImagesFadeInUp.inView = inViewport;
    if (this.MainImagesFadeInUp.inView) {
      this.zone.runOutsideAngular(() => { this.MainImagesFadeInUp.play() })
    }
  }

  // Small Images
  SmallImagesFadeInUp = new TweenAnimate('#skills .skills-small-images', TweenAnimation.FadeInUp);
  onSmallImagesViewport(inViewport: boolean) {
    this.SmallImagesFadeInUp.inView = inViewport;
    if (this.SmallImagesFadeInUp.inView) {
      this.zone.runOutsideAngular(() => { this.SmallImagesFadeInUp.play() })
    }
  }

  // Other Images
  OtherImagesFadeInUp = new TweenAnimate('#skills .other-services-images', TweenAnimation.FadeInUp);
  onOtherImagesViewport(inViewport: boolean) {
    this.OtherImagesFadeInUp.inView = inViewport;
    if (this.OtherImagesFadeInUp.inView) {
      this.zone.runOutsideAngular(() => { this.OtherImagesFadeInUp.play() })
    }
  }


  SkillsStyle(){
    const isMobile = this.deviceService.isMobile();
    const browser =this.deviceService.browser;
    const inHeight = window.innerHeight;
    let chrome_mobile= 0;
    if (isMobile && browser=="Chrome") {
      chrome_mobile= 40;
    }
    let style={
      'padding-top':window.innerHeight*0.11+chrome_mobile+'px'
    }
    return style;
  }

}//class
