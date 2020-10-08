import { Component, OnInit, AfterViewInit, NgZone, OnChanges } from '@angular/core';
import * as $ from "jquery";
import { ScrollService } from 'src/app/animate-on-scroll/src';
import { Power3, TimelineMax } from 'gsap';

@Component({
  selector: 'app-mmlogo',
  templateUrl: './mmlogo.component.html',
  styleUrls: ['./mmlogo.component.css']
})
export class MMLogoComponent implements OnInit, AfterViewInit {

  constructor(private scrollSrv: ScrollService, private zone: NgZone) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.Tween();
      }, 1000);
    })
  }

  get wordHeight() {
    //console.log("wordHeight");

    let wordBox = $('#word-box');
    let height = wordBox.height();
    let style = {
      'font-size': height + 'px',
      'line-height': height + 'px'
    }
    return style;
  }

  tl0: TimelineMax;
  tl1: TimelineMax;
  tl2: TimelineMax;
  tl3: TimelineMax;
  // in seconds
  Dur1 = 1;
  Delay1 = 0;

  Dur2 = 1;
  Delay2 = 2;

  Dur3 = 0.5;
  Delay3 = 1;

  Dur4 = 1;
  Delay4 = this.Dur1 + this.Delay1 + this.Dur2 + this.Delay2 + this.Dur3 + this.Delay3 + -1;


  Tween() {
    let mWidth = 23;
    let mLeftMar = 6;
    let mWordLeftMar = 2;

    /*
    // seperate
    Scene1: expand line duration = d

    // sequential
    Scene2: delay= 2 sec and expand M letter d+2
    .Scene3: delay= 1 sec and sepereate M letter

    // seperate
    Scene3: show words (delay = 4)

    */
    // line expand
    this.tl0 = new TimelineMax();
    this.tl0
      .to('div.underline-nav-center', this.Dur1,
        { left: '0%', width: '100%' })

    // === M
    // expand M letter
    this.tl1 = new TimelineMax();
    this.tl1
      .to('#m-moustafa', this.Dur2,
        { ease: Power3.easeInOut, top: '11%', height: '70%', left: '25%', width: '50%' }, "+=" + this.Delay2)

      .to('#m-moustafa', this.Dur3,
        { top: '28%', height: 'auto', left: mLeftMar + '%', width: mWidth + '%' }, "+=" + this.Delay3)

    // go to left
    this.tl2 = new TimelineMax();
    this.tl2
      .to('#m-mohsen', this.Dur2,
        { ease: Power3.easeInOut, top: '11%', height: '70%', left: '25%', width: '50%' }, "+=" + this.Delay2)

      .to('#m-mohsen', this.Dur3,
        { top: '28%', height: 'auto', left: mLeftMar + 50 + '%', width: mWidth + '%' }, "+=" + this.Delay3)
    // M ===

    // Word ===
    this.tl3 = new TimelineMax();
    this.tl3
      // expand M letter
      .to('#ostafa-word', this.Dur4,
        { opacity: 1, left: mLeftMar + mWordLeftMar + mWidth + "%" }, "+=" + this.Delay4)

      .to('#ohsen-word', this.Dur4,
        { opacity: 1, left: mLeftMar + mWordLeftMar + mWidth + 50 + "%" }, "-=" + this.Dur4)
    // === Word

    this.play();
  }//tween()

  play(speed = 1) {
    this.tl0.play().timeScale(speed);
    this.tl1.play().timeScale(speed);
    this.tl2.play().timeScale(speed);
    this.tl3.play().timeScale(speed);

  }

  async reverse(speed = 1) {
    console.log("tl0", this.tl0.progress());
    console.log("tl1", this.tl1.progress());
    console.log("tl2", this.tl2.progress());
    console.log("tl3", this.tl3.progress());


    return new Promise((resolve, reject) => {
      this.tl3.reverse().timeScale(speed);
      console.log("tl3");

      setTimeout(() => {
        this.tl2.reverse().timeScale(speed);
        this.tl1.reverse().timeScale(speed);
        console.log("tl1,tl2");

        setTimeout(() => {
          this.tl0.reverse().timeScale(speed);
          console.log("tl0");

          setTimeout(() => {
            resolve();
          }, (this.tl0.progress() * ((this.Dur1) * 1000)) / speed);
        }, (this.tl2.progress() * ((this.Dur2 + this.Dur3 + this.Delay2) * 1000)) / speed);

      }, (this.tl3.progress() * (this.Dur4 * 1000))/speed);
    })

  }

  restart(rest = 0.1,speed = 5) {
    this.reverse(speed).then(() => {
      setTimeout(() => {
        this.play();
      }, (rest) * 1000);
      console.log("reversed");
    });

  }

}
