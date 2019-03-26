import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';
import { siteTitle, traceId } from '../assets';
import { Subject } from "rxjs";
import { GoogleService } from '../google.service';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  logo$:Subject<boolean> = new Subject();
  window$:Subject<boolean> = new Subject();
  loading=false;
  windowLoaded=false;
  imageLoaded=false;
  constructor(private titleService:Title,private googleSrv:GoogleService) { 
    googleSrv.Script(traceId);
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

}