import { Injectable } from '@angular/core';
import { Linear, Power0, Power2, Power3, TimelineMax } from 'gsap';
import { ITypewriter, TweenAnimate } from './models';
import Typewriter from 'typewriter-effect/dist/core';

declare var $ :any;

@Injectable({
  providedIn: 'root'
})
export class StylerService {

  constructor() { }
  Controller;
  textAnimations = new TweenAnimate();

  scrollById(elId:string,delay=100) {
    setTimeout(() => {
      const element = document.getElementById(elId);
      if(element === null)
        return
      element.scrollIntoView({ behavior: 'smooth' });
    }, delay);
  }

  scrollByIdAndOffset(EleHandler:string,offset:number,delay=100) {
    setTimeout(() => {
      const pos = this.GetElementTopPosition(EleHandler);
      window.scrollTo(0,pos+offset);
      console.log('scroller',pos,"offset",offset);

    }, delay);
  }

  focusById(elId:string,delay=600){

    setTimeout(() => {
      const element = document.getElementById(elId);
      if(element === null)
        return
      element.focus();
    }, delay);
  }

  click(elId:string,delay=600){

    setTimeout(() => {
      const element = document.getElementById(elId);
      if(element === null)
        return
      element.click();
    }, delay);
  }


  CopyToClipboardById(containerid) {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        // Firefox
        window.getSelection().removeAllRanges();
      }
    } else if ((document as any).selection) {
      // IE?
      (document as any).selection.empty();
    }

    if ((document as any).selection) {
      var range = (document.body as any).createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange() as any;
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      //this.snack.open("Copied", "x", { duration: 1000 });
    }
  }

  getNavHeight(){
    let height = $('#navbar').height();
    return height;
  }

  getWindowHeight(){
    let height = window.innerHeight;
    return height;
  }

  CalcBodyHeight(){
    let NavHeight = this.getNavHeight();
    let WinHeight = this.getWindowHeight();
    let bodyHeight = WinHeight - NavHeight ;
    return bodyHeight;
  }

  GetElementTopPosition(EleHandler:string){
    return $(EleHandler).position().top
  }
  IsElementAfterView(EleHandler:string,offset:number){
    const WinPos = window.pageYOffset;
    const ElePos = this.GetElementTopPosition(EleHandler);
    let AfterView = WinPos + offset >= ElePos ;
    return AfterView;
  }

  ElementInView(arr:string[],offset:number){
    let elements = []
    for (let i = 0; i < arr.length; i++) {
      const str = arr[i];
      if (this.IsElementAfterView(str,offset)) {
        elements.push(str);
      }
    }
    return elements;
  }
  //

  typeEffect(property, newText, interval = 100, _this) {
    var stringToArray = (input: string): string[] => {
      if (input === null)
        return [];
      return input.split('');
    }

    let chars = stringToArray(newText);
    chars = chars.reverse();

    let i = chars.length - 1;
    if (i > 0) {
      let inter = setInterval(() => {
        _this[property] = _this[property] + chars[i];
        if (i == 0) {
          clearInterval(inter);
        }
        i--;
        return inter;
      }, interval);
    }
  }//typeEffect
}
