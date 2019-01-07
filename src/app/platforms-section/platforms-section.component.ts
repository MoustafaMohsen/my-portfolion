import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-platforms-section',
  templateUrl: './platforms-section.component.html',
  styleUrls: ['./platforms-section.component.css']
})
export class PlatformsSectionComponent implements OnInit {

  constructor() { }
  title:string="";
  description:string;
  ngOnInit() {

    let _title = "Platforms"
    this.description=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos odit nostrum, ducimus adipisci? Assumenda ullam nulla id natus!`;

    this.typeEffect(_title,100)
  }

  typeEffect(_title,interval){
    var stringToArray=(input:string):string[]=>{
      if (input===null)
        return [];
      return input.split('');
    }

    let chars = stringToArray(_title);
    chars = chars.reverse();

    let i = chars.length - 1;
    if(i>0){
      let inter = setInterval(()=>{
        this.title = this.title + chars[i];
        if (i==0) {
          clearInterval(inter);
        }
        i--;
      },interval);
    }
  }//typeEffect

}//class
