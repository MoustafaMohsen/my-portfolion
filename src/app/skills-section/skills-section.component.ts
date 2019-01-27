import { Component, OnInit } from "@angular/core";
import { Availableimages } from "../assets";
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
    this._title = "Skills";
    this.description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos odit nostrum, ducimus adipisci? Assumenda ullam nulla id natus!`;


    this.smallImages=[
      Availableimages.php,
      Availableimages.sass,
    ]

    this.bigImages=[
      Availableimages.csharp,
      Availableimages.ts,
      Availableimages.js,
      Availableimages.html,
      Availableimages.css,
    ]

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
