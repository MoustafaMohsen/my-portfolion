import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';
import { siteTitle } from '../assets';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  loading=false;
  windowLoaded=false;
  constructor(private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle(siteTitle);

    this.disableScroll();
    
    var OnHeroLoad=()=>{
      setTimeout(() => {
        this.loading=true;
      }, 5000);
      
      var loaded = ()=>{
        console.log("window loaded");
        this.enableScroll();
        this.loading = false;
        this.windowLoaded = true;
      }
      window.onload=loaded
    }
    this.logoLoad(OnHeroLoad)
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

  logoLoad(Func:Function){
    document.getElementById('logoload').addEventListener('load',()=>{
      Func();
    })


  }
}