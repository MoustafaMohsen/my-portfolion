import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import { map, pairwise, throttleTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { StylerService } from '../styler.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
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
        ()=>{
          let ids = ["#skills","#platforms","#work","#blog","#contact"];
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
        }
      )

    });
  }// ngOnInit

}
class scrollObject{
  up=false;
  down=false;
  position=0;
}
