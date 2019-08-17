import { Component, OnInit } from "@angular/core";
import { Availableimages, skillsSection } from "../assets";
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: "app-skills-section",
  templateUrl: "./skills-section.component.html",
  styleUrls: ["./skills-section.component.css"]
})
export class SkillsSectionComponent implements OnInit {
  constructor( private deviceService: DeviceDetectorService) {}

  title: string="";
  _title: string="";
  description: string;
  underscore:string;

  smallImages:string[];
  bigImages:string[];

  ngOnInit() {
    this._title = skillsSection.title;
    this.description = skillsSection.description;


    this.smallImages=skillsSection.smallImages

    this.bigImages=skillsSection.bigImages

  }//ngOnInit

  
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


  SkillsStyle(){
    const isMobile = this.deviceService.isMobile();
    const browser =this.deviceService.browser;
    const inHeight = window.innerHeight;
    let chrome_mobile= 0;
    if (isMobile && browser=="Chrome") {
      chrome_mobile= 40;
    }
    let style={
      'padding-top':window.innerHeight*0.11+chrome_mobile+'px'
    }
    return style;
  }

}//class
