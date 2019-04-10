import { Component, OnInit, AfterViewInit, NgZone, OnChanges } from '@angular/core';
import * as $ from "jquery";
import { ScrollService } from 'src/app/animate-on-scroll/src';
declare var ScrollMagic;
declare var TimelineMax;
declare var TweenMax;

declare var Power0;
declare var Power1;
declare var Power2;
declare var Power3;
declare var Power4;

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
    // line expand
    var tl0 = new TimelineMax();
    tl0
    .to('div.underline-nav-center',1,{left:'0%',width:'100%'})

    // === M
    // expand M letter 
    var tl1 = new TimelineMax();
    tl1
    .to('#m-moustafa',1,{ease: Power3.easeInOut,top: '11%',height: '70%',left: '25%',width: '50%'},"+=2")
    .to('#m-moustafa',0.5,{top: '28%',height: 'auto',left: mLeftMar+'%',width: mWidth+'%'},"+=1")

    
    // go to left
    var tl2 = new TimelineMax();
    tl2
    .to('#m-mohsen',1,{ease: Power3.easeInOut, top: '11%',height: '70%',left: '25%',width: '50%'},"+=2")
    .to('#m-mohsen',0.5,{top: '28%',height: 'auto',left: mLeftMar+50+'%',width: mWidth+'%'},"+=1")
    // M === 

    // Word ===
    var tl3 = new TimelineMax();
    tl3
    // expand M letter 
    .to('#ostafa-word',1,{opacity:1,left:mLeftMar+mWordLeftMar+mWidth+"%"},"+=4")
    .to('#ohsen-word',1,{opacity:1,left:mLeftMar+mWordLeftMar+mWidth+50+"%"},"-=1")
    // === Word    
    


    tl0.play();
    tl1.play();
    tl2.play();
    tl3.play();

  }//tween()
  

}
