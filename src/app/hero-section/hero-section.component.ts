import { Component, OnInit, AfterViewInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';
import { siteTitle, traceId } from '../assets';
import { Subject } from "rxjs";
import { GoogleService } from '../google.service';
import { StylerService } from '../styler.service';
import { environment } from '../../environments/environment';
import { ScrollService } from '../animate-on-scroll/src';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Linear, Power0, Power2, Power3, TimelineMax } from 'gsap';

declare var ScrollMagic;

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit, AfterViewInit {
  logo$: Subject<boolean> = new Subject();
  window$: Subject<boolean> = new Subject();
  loading = false;
  windowLoaded = false;
  imageLoaded = false;
  highlightedbutton: string;

  @ViewChild('secondTextEle', { static: false }) secondTextEle: ElementRef;
  constructor(private scrollSrv: ScrollService, private titleService: Title, googleSrv: GoogleService, public styler: StylerService, private zone: NgZone, private deviceService: DeviceDetectorService) {
    if (environment.production) {
      googleSrv.Script(traceId);
    }
    else {
      console.log("Development mode");
    }
  }

  ngOnInit() {
    this.titleService.setTitle(siteTitle);
    this.disableScroll();
    this.logo$.subscribe(v => {
      this.imageLoaded = v;
      setTimeout(() => {
        this.loading = true;
      }, 5000);
    });
    this.window$.subscribe(v => {
      this.loading = !v;
      this.windowLoaded = v;
      this.enableScroll();
    })
  }

  ngAfterViewInit(): void {
    this.onLogoLoad(() => this.logo$.next(true));
    window.onpageshow = () => this.window$.next(true);
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.startanimation();
        this.scrollHandler();
      }, 1000);
    })
  }

  inview = false;
  onInViewportChange(inViewport: boolean) {
    this.inview = inViewport;

  }

  getheight() {
    let style = {
      height: window.innerHeight + 'px'
    }
    return style
  }

  logoheight() {
    let mmlogo = $('#mmlogo')
    let logoWidth = mmlogo.width();
    let style = {
      height: logoWidth / 3.5 + 'px'
    }
    return style;
    //mmlogo.css(style)
  }
  disableScroll() {
    window.scrollTo(0, 0);
    $(document.body).addClass('modal-open')
  }
  enableScroll() {
    $(document.body).removeClass('modal-open')
  }

  onLogoLoad(Func: Function) {
    let src = `${window.location.href}/assets/img/m-logo.png`;
    var imge = new Image();
    let that = this
    $(imge).one("load", function () {
      if (!that.imageLoaded)
        Func();
    })
      .each(function () {
        if (this.complete) {
          if (!that.imageLoaded)
            setTimeout(() => {
              Func();
            }, 100);
        }
      });
    imge.src = src;
    imge.id = "pseudo-logo";

  }

  scrollDown() {
    this.styler.scrollById("skills", 0)
  }

  revealTextAnimation(textElement, revealerElement) {

    let element = document.getElementById("second-back")
    try {
      this.styler.textAnimations.revealTextAnimation(textElement, revealerElement, element);
    } catch (error) {
      console.error(error);

    }

  }

  startanimation() {
    const isMobile = this.deviceService.isMobile();
    const browser = this.deviceService.browser;
    if (isMobile && browser == "Chrome") {
      $('.bottom-abs').css("transform", "translateX(-50%) translateY(0%)");
    }

    let windowWidth = window.innerWidth;
    let navHeight = windowWidth < 500 ? 6 : 7;

    this.styler.Controller = new ScrollMagic.Controller();
    var controller = this.styler.Controller;

    // == logo
    var tlLogo = new TimelineMax();
    tlLogo
      .to('#mmlogo', 0.6, { scale: 0.5, x: '0%', top: "22%", ease: Power0.easeNone })
      .to('#mmlogo', 0.4, { scale: 0.25, x: '-37.5%', top: "3.65%", ease: Power0.easeNone })
      .to('.logo-overlay', 0.2, { display: 'block' }, "-=0.2")

    var sceneMMlogo = new ScrollMagic.Scene({
      triggerElement: '.nav-col',
      triggerHook: 0,
      duration: '100%'
    })
      .setTween(tlLogo)
      .addTo(controller);
    const inHeight = window.innerHeight - 56;

    // == under line
    var tlUnderLine = new TimelineMax();
    tlUnderLine
      .to('.underline-nav-center-container', 1, { width: '100%', left: 0, top: navHeight * 0.94 + "%", ease: Power0.easeNone })
      .to('.underline-nav-center-container>div', 1, { backgroundColor: '#16ADE3', borderRadius: '0px', ease: Power0.easeNone }, "-=1")

    var sceneMMlogo = new ScrollMagic.Scene({
      triggerElement: '.nav-col',
      triggerHook: 0,
      duration: '100%'
    })
      .setTween(tlUnderLine)
      .addTo(controller);

    // == navbar
    /**from
     position: fixed;
      background-color: #3F3F3F;
      width: 100%;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 2 !important;
     */
    var tlNavBackground = new TimelineMax();
    tlNavBackground
      .fromTo('.navbar-sticky', 1, { height: "100vh" }, { height: navHeight + "%", backgroundColor: '#1B1C24', ease: Power0.easeNone }, "+=0.1")

    var sceneMMlogo = new ScrollMagic.Scene({
      triggerElement: '.nav-col',
      triggerHook: 0,
      duration: '100%'
    })
      .setTween(tlNavBackground)
      .addTo(controller);

    let text = document.getElementsByClassName('the-text');
    let revealer = document.getElementsByClassName('revealer');
    this.revealTextAnimation(text, revealer);
  }


  updatePageHeight() {
    const inHeight = window.innerHeight;
    $(".hero-page").css("height", `${inHeight}px`)
  }
  scrollHandler() {
    // var navbar = new TimelineMax();
    this.scrollSrv.scrollObs.subscribe(() => {
      let pos = this.scrollSrv.pos;
      let height = window.innerHeight;
      let proggress = pos <= height ? (height - pos) / height : 0;
      proggress = 1 - proggress;
      if (pos > 10) {
        $('.hero-background-text p').addClass('fade-out').removeClass('fade-in')
        $('.bottom-abs button').addClass('fade-out').removeClass('fade-in')
      } else {
        $('.hero-background-text p').addClass('fade-in').removeClass('fade-out')
        $('.bottom-abs button').addClass('fade-in').removeClass('fade-out')
      }

      if (proggress > 0.95) {
        $('.buttons-container').addClass('fade-in').removeClass('fade-out')
      } else {
        $('.buttons-container').addClass('fade-out').removeClass('fade-in')
      }

      if (proggress >= 1) {
        $('.buttons-container').addClass('flicker')
      } else {
        $('.buttons-container').addClass('flicker').removeClass('fade-in')
      }

      let ids = ["#skills", "#platforms", "#work", "#blog", "#contact"];
      let elementsInView = this.styler.ElementInView(ids, 150);
      if (elementsInView.length > 0) {
        let Hightligh = elementsInView[elementsInView.length - 1];
        if (Hightligh && Hightligh !== this.highlightedbutton) {
          // detect change
          this.highlightedbutton = Hightligh;
          ids.forEach(id => {
            if (id != Hightligh)
              $(id + '-link').removeClass('active');
          })
          $(Hightligh + '-link').addClass('active');
        }
      }
      else {
        ids.forEach(id => {
          $(id + '-link').removeClass('active');
        });
        this.highlightedbutton = "";
      }
    })
  }
}
