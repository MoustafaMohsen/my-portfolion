import { StylerService } from './../styler.service';
import { Component, OnInit, HostListener, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Availableimages, platformsSection } from "../assets";
import { TweenAnimate, TweenAnimation } from '../models';
import Typewriter from 'typewriter-effect/dist/core';
import { gsap, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
@Component({
  selector: 'app-platforms-section',
  templateUrl: './platforms-section.component.html',
  styleUrls: ['./platforms-section.component.scss']
})
export class PlatformsSectionComponent implements OnInit {

  @ViewChild('titleElement') TitleEle: ElementRef;
  @ViewChild('descriptionElement') descriptionEle: ElementRef;
  constructor(private zone: NgZone, private stylerService: StylerService) { }
  // title: string = "";
  _title: string = "";
  description: string;
  servicesImages: string[];
  smallImages: string[];
  smallImagesTitle: string;
  bigImages: string[];
  ngOnInit() {

    this._title = platformsSection.title;
    this.description = platformsSection.description;

    this.servicesImages = platformsSection.servicesImages;
    this.smallImagesTitle = platformsSection.smallImagesTitle;
    this.smallImages = platformsSection.smallImages;

    this.bigImages = platformsSection.bigImages;
    let st: gsap.plugins.ScrollTriggerStaticVars = {
      trigger: "#platforms-header",
      start: "center bottom",
      end: "center center",
      scrub: 4,
      markers: false,
    };

    gsap.registerPlugin(ScrollTrigger);

    new TimelineMax().from("section .platforms-header .before-element",1 , {
      scrollTrigger: st,
      "clip-path": "polygon(0 100%, 0% 100%, 100% 100%)"
    });

    new TimelineMax().from("section .platforms-header .after-element",1 , {
      scrollTrigger: st,
      "clip-path": "polygon(0 0, 0 1%, 100% 0)"
    });


  }

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

  // description
  DescriptionFadeInUp = new TweenAnimate();
  onDescriptionViewport(inViewport: boolean) {
    this.DescriptionFadeInUp.inView = inViewport;
    if (inViewport && !this.DescriptionFadeInUp.didRun) {

      this.DescriptionFadeInUp.typewriter = new Typewriter(this.TitleEle.nativeElement, {
        loop: false,
        cursor: "",
        autoStart: false,
        delay: 75
      });

      this.DescriptionFadeInUp.typewriter2 = new Typewriter(this.descriptionEle.nativeElement, {
        loop: false,
        cursor: "",
        autoStart: false,
        delay: 75
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
  MainImagesFadeInUp = new TweenAnimate('#platforms .platforms-main-images', TweenAnimation.FadeInUp);
  onMainImagesViewport(inViewport: boolean) {
    this.MainImagesFadeInUp.inView = inViewport;
    if (this.MainImagesFadeInUp.inView) {
      this.zone.runOutsideAngular(() => { this.MainImagesFadeInUp.play() })
    }
  }

  // Small Images
  SmallImagesFadeInUp = new TweenAnimate('#platforms .platforms-small-images', TweenAnimation.FadeInUp);
  onSmallImagesViewport(inViewport: boolean) {
    this.SmallImagesFadeInUp.inView = inViewport;
    if (this.SmallImagesFadeInUp.inView) {
      this.zone.runOutsideAngular(() => { this.SmallImagesFadeInUp.play() })
    }
  }

  // Other Images
  OtherImagesFadeInUp = new TweenAnimate('#platforms .other-services-images', TweenAnimation.FadeInUp);
  onOtherImagesViewport(inViewport: boolean) {
    this.OtherImagesFadeInUp.inView = inViewport;
    if (this.OtherImagesFadeInUp.inView) {
      this.zone.runOutsideAngular(() => { this.OtherImagesFadeInUp.play() })
    }
  }


}//class

