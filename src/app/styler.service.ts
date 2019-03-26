import { Injectable } from '@angular/core';
declare var $ :any;

@Injectable({
  providedIn: 'root'
})
export class StylerService {

  constructor() { }
  scrollById(elId:string,delay=100) {
    setTimeout(() => {
      console.log("scrolling to",elId);
      const element = document.getElementById(elId);
      if(element === null)
        return
      element.scrollIntoView({ behavior: 'smooth' });
    }, delay);
  }

  focusById(elId:string,delay=600){
    
    setTimeout(() => {
      console.log("focusById",elId);
      const element = document.getElementById(elId);      
      if(element === null)
        return
      element.focus();
    }, delay);
  }

  click(elId:string,delay=600){
    
    setTimeout(() => {
      console.log("click",elId);
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
    console.log("======Body Hieght");
    console.log("body-container",height);
    console.log("Body Hieght======");
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
  //
  
}
