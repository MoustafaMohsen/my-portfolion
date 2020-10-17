import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { blogSection } from '../assets';
import { TweenAnimate, TweenAnimation } from "../models";
import Typewriter from 'typewriter-effect/dist/core';
import { TimelineMax } from "gsap";

declare var MediumWidget

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {

  title: string = "";
  _title: string = "";
  description: string;
  @ViewChild('titleElement') TitleEle: ElementRef;
  @ViewChild('descriptionElement') descriptionEle: ElementRef;

  constructor(private zone: NgZone) { }

  ngOnInit() {

    MediumWidget.Init({ renderTo: '#medium-widget', params: { "resource": "https://medium.com/directcode", postsPerLine: 4, limit: 4, picture: "big", fields: ["description", "author", "claps"], ratio: "landscape" } });

    this._title = blogSection.title;
    this.description = blogSection.description;

    const stBlog: gsap.plugins.ScrollTriggerStaticVars = {
      trigger: "#blog-header",
      start: "center bottom",
      end: "center center",
      scrub: 4,
      markers: false,
    };

    new TimelineMax().from("#blog-header .before-element",1 , {
      scrollTrigger: stBlog,
      "clip-path": "polygon(100% 100%, 0% 100%, 100% 100%)",
    });

  }

  inview = false;
  onInViewportChange(inViewport: boolean) {
    this.inview = inViewport;
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

}
