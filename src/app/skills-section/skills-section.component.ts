import { Component, OnInit } from "@angular/core";
import { Availableimages, skillsSection } from "../assets";
@Component({
  selector: "app-skills-section",
  templateUrl: "./skills-section.component.html",
  styleUrls: ["./skills-section.component.css"]
})
export class SkillsSectionComponent implements OnInit {
  constructor() {}

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



}//class
