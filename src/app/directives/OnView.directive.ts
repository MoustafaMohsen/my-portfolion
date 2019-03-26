import { Directive, Input, Renderer, ElementRef, OnInit, OnDestroy, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { ScrollService } from '../animate-on-scroll/src';
import { map, pairwise, throttleTime, distinctUntilChanged } from 'rxjs/operators';
  
  @Directive({
    selector: "[appStickyHeader]"
  })
  export class OnView implements OnInit{
    scroll$= fromEvent(window,'scroll').pipe(
        throttleTime(10),
        map(()=>window.pageYOffset),
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
        //distinctUntilChanged()
    )

    ngOnInit() {        
        this.scroll$.subscribe(s=>{
        });
    }

    

  }//class

  class scrollObject{
      up=false;
      down=false;
      position=0;
  }
  