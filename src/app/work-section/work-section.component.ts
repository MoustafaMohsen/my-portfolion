import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Availableimages, workSection } from '../assets';
import { workCard } from '../models';
import { TweenAnimate, TweenAnimation } from "../models";
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})

export class WorkSectionComponent implements OnInit {

  @ViewChild('titleElement') TitleEle: ElementRef;
  @ViewChild('descriptionElement') descriptionEle: ElementRef;

  constructor(private zone: NgZone) { }

  title: string = "";
  _title: string = "";
  description: string;

  Cards: workCard[] = [];
  smallCards: workCard[] = [];

  project: workCard;

  test: string = "";

  ngOnInit() {
    this._title = workSection.title;
    this.description = workSection.description;

    this.test = Availableimages.test;
    this.Cards = workSection.mainProjects;
    this.smallCards = workSection.otherProjects;
  }//ngOnInit

  inview = false;
  onInViewportChange(inViewport: boolean) {
    this.inview = inViewport;
    console.log("work", this.inview);

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

  stringfy(ob) {
    return JSON.stringify(ob)
  }


  openModal(workcard: workCard) {
    this.setproject(workcard);
    let $_ = $ as any;
    $_("#exampleModal").modal('show');

  }

  closeModal() {
    let $_ = $ as any;
    $_("#exampleModal").modal('hide');
  }

  getHeight(width: number, ratio: number) {
    let height = width / ratio;
    return {
      'height': height + 'px'
    }
  }


  setproject(workcard: workCard) {
    this.project = workcard;
  }
  getBackgroundImage(index: number) {
    let src = this.project.backgroundImages[index];
    let style = {
      'background-image': `url('${src}')`
    }
    return style;
  }

}//class




