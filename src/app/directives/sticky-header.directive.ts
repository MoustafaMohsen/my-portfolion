import {
    Directive,
    Renderer2,
    HostListener,
    Input,
    ElementRef
  } from "@angular/core";
  
  @Directive({
    selector: "[appStickyHeader]"
  })
  export class StickyHeaderDirective {
    @Input() public topOffset = 40;
    @Input() isContent = false;
  
    @HostListener("window:scroll", ["$event"])
    public windowScrolled($event) {
      console.log(this.isContent);
      if (this.isContent) {
        this.windowScrollEventContent($event);
      } else {
        this.windowScrollEvent($event);
      }
    }
    constructor(private el: ElementRef, private renderer: Renderer2) {}
  
    windowScrollEventContent($event) {
      const isReachingTop = this.getTop() > this.topOffset;
  
      if (isReachingTop) {
        
        this.renderer.setStyle(this.el.nativeElement, "margin-top", "40px");
      } else {
        this.renderer.setStyle(this.el.nativeElement, "margin-top", "initial");
      }
    }
  
    windowScrollEvent($event) {
      const isReachingTop = this.getTop() > this.topOffset;
      if (isReachingTop) {
        this.renderer.setStyle(this.el.nativeElement, "position", "fixed");
        this.renderer.setStyle(this.el.nativeElement, "top", "0");
      } else {
        this.renderer.setStyle(this.el.nativeElement, "position", "relative");
      }
    }
  
    getTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      );
    }
  }
  