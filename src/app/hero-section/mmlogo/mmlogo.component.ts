import { Component, OnInit, AfterViewInit, NgZone, OnChanges } from '@angular/core';
import * as $ from "jquery";
import { ScrollService } from 'src/app/animate-on-scroll/src';
import { Power3, TimelineMax } from 'gsap';

@Component({
  selector: 'app-mmlogo',
  templateUrl: './mmlogo.component.html',
  styleUrls: ['./mmlogo.component.css']
})
export class MMLogoComponent implements OnInit,AfterViewInit {

  constructor(private scrollSrv:ScrollService,private zone:NgZone) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(()=>{
      setTimeout(() => {
        this.Tween();
      }, 1000);
    })
  }

  get wordHeight(){
    //console.log("wordHeight");

    let wordBox = $('#word-box');
    let height = wordBox.height();
    let style={
      'font-size': height + 'px',
      'line-height': height + 'px'
    }
    return style;
  }

  Tween(){
    let mWidth=23;
    let mLeftMar=6;
    let mWordLeftMar=2;

    // in seconds
    const Dur1 = 1;
    const Delay1 = 0;

    const Dur2 = 1;
    const Delay2 = 2;

    const Dur3 = 0.5;
    const Delay3 = 1;

    const Dur4 = 1;
    const Delay4 = Dur1 + Delay1 + Dur2 + Delay2 + Dur3 + Delay3 + -1.5;

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
    var tl0 = new TimelineMax();
    tl0
    .to('div.underline-nav-center',Dur1,{left:'0%',width:'100%'})

    // === M
    // expand M letter
    var tl1 = new TimelineMax();
    tl1
    .to('#m-moustafa',Dur2,{ease: Power3.easeInOut,top: '11%',height: '70%',left: '25%',width: '50%'},"+=" + Delay2)
    .to('#m-moustafa',Dur3,{top: '28%',height: 'auto',left: mLeftMar+'%',width: mWidth+'%'},"+=1")

    // go to left
    var tl2 = new TimelineMax();
    tl2
    .to('#m-mohsen',Dur2,{ease: Power3.easeInOut, top: '11%',height: '70%',left: '25%',width: '50%'},"+=" + Delay2)
    .to('#m-mohsen',Dur3,{top: '28%',height: 'auto',left: mLeftMar+50+'%',width: mWidth+'%'},"+=1")
    // M ===

    // Word ===
    var tl3 = new TimelineMax();
    tl3
    // expand M letter
    .to('#ostafa-word',Dur4,{opacity:1,left:mLeftMar+mWordLeftMar+mWidth+"%"},"+=" + Delay4)
    .to('#ohsen-word',Dur4,{opacity:1,left:mLeftMar+mWordLeftMar+mWidth+50+"%"},"-="+Dur4)
    // === Word

    tl0.play();
    tl1.play();
    tl2.play();
    tl3.play();

  }//tween()

}
