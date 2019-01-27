import { Component, OnInit, ElementRef } from '@angular/core';
import { map, pairwise, throttleTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  scroll$= fromEvent(window,'scroll').pipe(
    throttleTime(10),
    map(()=>window.pageYOffset),
    distinctUntilChanged(),
    pairwise(),
    map(([y1, y2]): scrollObject => {
        if(y2 < y1)
        {
            let sc:scrollObject = {
                down:false,
                up:true,
                position:y2
            }
            return sc;
        }
        else
        {
            let sc:scrollObject = {
                down:true,
                up:false,
                position:y2
            }
            return sc;
        }

    }),
)
  constructor(private elementRef: ElementRef) { }

  viewclass = ""
  ngOnInit() {
    let oldElementPos:number;

    if(false)
    this.scroll$.subscribe(s=>{
      let customOffset = 80;
      //set initial old element position
      if(!oldElementPos){
        let el = this.elementRef.nativeElement
        const viewportTop = el.getBoundingClientRect().top;
        const clientTop = el.clientTop;
    
        oldElementPos=viewportTop-clientTop ;
        console.log("offsettop",oldElementPos);
      }
      let scrollPos = s.position;

      if (scrollPos>= oldElementPos+customOffset) {
        this.viewclass="nav-after"
      }
      if (scrollPos < oldElementPos){
        this.viewclass=""
      }

    });
  }

}
class scrollObject{
  up=false;
  down=false;
  position=0;
}
