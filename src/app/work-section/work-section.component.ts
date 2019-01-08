import { Component, OnInit } from '@angular/core';
import { Availableimages } from '../assets';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})

export class WorkSectionComponent implements OnInit {

  constructor() { }
  title:string="";
  _title:string="";
  description:string;
  Cards:workCard[]=[];
  ngOnInit() {
    this._title="Work";
    this.description="s";
  
    let FridgeNotes:workCard={
      title:"Fridge Notes",
      description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,

      backgroundClass:"fridge-notes-background",
      languages:"Html, CSS, C#, TypeScript",
      buttonText:"Visit Website",
      resources_Images:[
        Availableimages.angular,
        Availableimages.aspcore,
        Availableimages.mysql
      ],
      deployment_Images:[
        Availableimages.github,
        Availableimages.heroku,
        Availableimages.digitalocean
      ],
    };

    let IslamicSearch:workCard={
      title:"Islamic Search",
      description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,

      backgroundClass:"islamic-search-background",
      languages:"Html, CSS, C#, TypeScript",
      buttonText:"Visit Website",
      resources_Images:[
        Availableimages.angular,
        Availableimages.aspcore,
        Availableimages.sqlite
      ],
      deployment_Images:[
        Availableimages.github,
        Availableimages.heroku
      ],
    };

    this.Cards=this.Cards.concat([FridgeNotes,IslamicSearch]);

  }//ngOnInit

  stringfy(ob){
    return JSON.stringify(ob)
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

interface workCard{
  title:string;
  description:string;
  resources_Images:string[];
  deployment_Images:string[];
  backgroundClass:string;
  languages:string;
  buttonText:string;
}



