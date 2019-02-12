import { Component, OnInit,HostListener } from '@angular/core';
import { Availableimages, platformsSection } from "../assets";
@Component({
  selector: 'app-platforms-section',
  templateUrl: './platforms-section.component.html',
  styleUrls: ['./platforms-section.component.css']
})
export class PlatformsSectionComponent implements OnInit {

  constructor() { }
  title:string="";
  _title:string="";
  description:string;
  servicesImages:string[];
  smallImages:string[];
  smallImagesTitle:string;
  bigImages:string[];
  ngOnInit() {

    this._title = platformsSection.title;
    this.description=platformsSection.description;

    this.servicesImages=platformsSection.servicesImages;
    this.smallImagesTitle = platformsSection.smallImagesTitle;
    this.smallImages=platformsSection.smallImages;

    this.bigImages=platformsSection.bigImages;

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
