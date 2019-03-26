import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import { map, pairwise, throttleTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { StylerService } from '../styler.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  scrollObs: Observable<any>;
  highlightedbutton:string;
  lastElementsInView;
  constructor(private elementRef: ElementRef,private zone: NgZone, public styler:StylerService) {
    this.scrollObs = fromEvent(window, 'scroll').pipe(
      throttleTime(20),
      distinctUntilChanged()
    );
   }

  viewclass = "";
  ngOnInit() {

    this.zone.runOutsideAngular(()=>{
      this.scrollObs.subscribe( 
        (v)=>{
          console.log(v);
          let ids = ["#skills","#platforms","#work","#contact"];
          let elementsInView = this.ElementInView(ids,50);
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



        }
      )

    });
  }// ngOnInit

  IsElementAfterView(EleHandler:string,offset:number){
    const WinPos = window.pageYOffset;
    const ElePos = $(EleHandler).position().top;
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

  scrollTo(){

  }

}
class scrollObject{
  up=false;
  down=false;
  position=0;
}
