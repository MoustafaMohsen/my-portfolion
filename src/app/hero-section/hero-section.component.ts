import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';
import { siteTitle, traceId } from '../assets';
import { Subject } from "rxjs";
import { GoogleService } from '../google.service';
import { StylerService } from '../styler.service';
import { environment } from '../../environments/environment';
import { ScrollService } from '../animate-on-scroll/src';

//import * as ScrollMagic from 'scrollmagic';
declare var ScrollMagic;
declare var TimelineMax;
declare var Power0;
declare var Power1;
declare var Power2;
declare var Power3;
declare var Power4;

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit, AfterViewInit {
  logo$:Subject<boolean> = new Subject();
  window$:Subject<boolean> = new Subject();
  loading=false;
  windowLoaded=false;
  imageLoaded=false;
  highlightedbutton:string;

  constructor(private scrollSrv:ScrollService, private titleService:Title, googleSrv:GoogleService,public styler:StylerService,private zone:NgZone) {
    if(environment.production){
      googleSrv.Script(traceId);
    }
    else{
      console.log("Development mode");
    }
  }

  ngOnInit() {
    this.titleService.setTitle(siteTitle);

    this.disableScroll();

    this.logo$.subscribe( v=>{
      this.imageLoaded = true;
      setTimeout(() => {
        this.loading=true;
      }, 6000);
    });

    this.window$.subscribe( v=>{
      this.loading = false;
      this.windowLoaded = true;
      this.enableScroll();
    })
    
    this.onLogoLoad( ()=>this.logo$.next(true) );
    window.onpageshow  = ()=> this.window$.next(true);

  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(()=>{
      setTimeout(() => {
        this.startanimation();
        this.scrollHandler();
      }, 1000);
    })
  }
  getheight(){
    let style={
      height:window.innerHeight+'px'
    }
    return style
  }

  logoheight(){
    let mmlogo = $('#mmlogo')
    let logoWidth = mmlogo.width();
    let style={
      height: logoWidth / 3.5  +'px'
    }
    return style;
    //mmlogo.css(style)
  }
  disableScroll(){
    document.body.style.cssText = "overflow: hidden;"
  }
  enableScroll(){
    document.body.style.cssText = "overflow: unset;"
  }

  onLogoLoad(Func:Function){
    let src = `${window.location.href}/assets/img/m-logo.png`;
    var imge = new Image();
    imge.onload = ()=>{
      Func()
    }
    imge.src = src;
  }

  scrollDown(){
    this.styler.scrollById("skills",0)
  }

  startanimation(){
    this.styler.Controller = new ScrollMagic.Controller();
    var controller = this.styler.Controller;

    var tlLogo = new TimelineMax();
    tlLogo
    .to('#mmlogo',0.7,{scale:0.25, x:'-37.5%', top:"5%", ease: Power0.easeNone})
  
    var sceneMMlogo = new ScrollMagic.Scene({
      triggerElement: '.nav-col',
      triggerHook: 0,
      duration:'70%'
    })
    //.setPin('#mmlogo')
    .setTween(tlLogo)
      .addIndicators({
        name:'mmlogo',
        colorTrigger:'blue',
        indent:200,
        colorStart:'#75c695',
        colorEnd:'green',
      })
      .addTo(controller);
      // under line
      var tlUnderLine = new TimelineMax();
      tlUnderLine
      .to('.underline-nav-center-container',1,{width:'100%', left:0, top:"10%", ease: Power0.easeNone})
      .to('.underline-nav-center-container>div',1,{backgroundColor:'#16ADE3', ease: Power0.easeNone},"-=1")
    
      var sceneMMlogo = new ScrollMagic.Scene({
        triggerElement: '.nav-col',
        triggerHook: 0,
        duration:'100%'
      })
      .setTween(tlUnderLine)
        .addIndicators({
          name:'center-container',
          colorTrigger:'blue',
          indent:200,
          colorStart:'#75c695',
          colorEnd:'green',
        })
        .addTo(controller);
  
      // navbar
      var tlNavBackground = new TimelineMax();
      tlNavBackground
      .to('.navbar-sticky',1,{height:'10%',backgroundColor:'#1B1C24', ease: Power0.easeNone},"+=0.1")
  
    
      var sceneMMlogo = new ScrollMagic.Scene({
        triggerElement: '.nav-col',
        triggerHook: 0,
        duration:'100%'
      })
      .setTween(tlNavBackground)
        .addIndicators({
          name:'tlNavBackground',
          colorTrigger:'blue',
          indent:200,
          colorStart:'#75c695',
          colorEnd:'green',
        })
        .addTo(controller);
 
  }



  scrollHandler(){
    var controller = this.styler.Controller;
    this.scrollSrv.scrollObs.subscribe(()=>{
      let pos = this.scrollSrv.pos;
      let height = window.innerHeight;
      let proggress = pos<= height?(height - pos)/height : 0
      proggress = 1-proggress
      if (pos>10) {
        $('.hero-background-text p').addClass('fade-out').removeClass('fade-in')
        $('.bottom-abs button').addClass('fade-out').removeClass('fade-in')
      }else{
        $('.hero-background-text p').addClass('fade-in').removeClass('fade-out')
        $('.bottom-abs button').addClass('fade-in').removeClass('fade-out')
      }

      if (proggress > 0.9) {
        $('.buttons-container').addClass('fade-in').removeClass('fade-out')
      }else{
        $('.buttons-container').addClass('fade-out').removeClass('fade-in')
      }

      let ids = ["#skills","#platforms","#work","#contact"];
      let elementsInView = this.styler.ElementInView(ids,150);
      if (elementsInView.length>0) {
        let Hightligh = elementsInView[elementsInView.length-1];
        if(Hightligh && Hightligh !== this.highlightedbutton){
          // detect change
          this.highlightedbutton = Hightligh;
          ids.forEach(id=>{
            if(id != Hightligh)
            $(id+'-link').removeClass('active');
          })
          $(Hightligh+'-link').addClass('active');
        }
      }
      else{
        ids.forEach(id=>{
          $(id+'-link').removeClass('active');
        });
        this.highlightedbutton = "";
      }
    })

  }
}