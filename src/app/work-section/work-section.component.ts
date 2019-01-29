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
  smallCards:workCard[]=[];

  smallCardFooterClass="csdfaf";
  ngOnInit() {
    this._title="Work";
    this.description="s";
  
    let FridgeNotes:workCard={
      title:"Fridge Notes",
      description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,

      backgroundClass:"fridge-notes-background",
      languages:"Html, CSS, C#, TypeScript",
      buttonText:"LEARN MORE",
      resources_Images:[
        Availableimages.workcard.angular,
        Availableimages.workcard.aspcore,
        Availableimages.workcard.mysql
      ],
      deployment_Images:[
        Availableimages.workcard.github,
        Availableimages.workcard.heroku,
        Availableimages.workcard.digitalocean
      ],
    };

    let IslamicSearch:workCard={
      title:"Islamic Search",
      description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,

      backgroundClass:"islamic-search-background",
      languages:"Html, CSS, C#, TypeScript",
      buttonText:"LEARN MORE",
      resources_Images:[
        Availableimages.workcard.angular,
        Availableimages.workcard.aspcore,
        Availableimages.workcard.sqlite
      ],
      deployment_Images:[
        Availableimages.workcard.github,
        Availableimages.workcard.heroku
      ],
    };

    this.Cards=this.Cards.concat([FridgeNotes,IslamicSearch]);
    this.smallCards=this.Cards.map(x=>{
      x.backgroundImage = Availableimages.fridgenotes_desktop;
      x.style={
        'background-image':`url(${x.backgroundImage})`
      }
      
      return x;
    });
    this.smallCards = this.smallCards.concat(this.smallCards,this.smallCards,this.smallCards)

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

  openDialog(){
    let $_ = $ as any;
    $_("#exampleModal").modal('show');
    
  }
  
}//class

interface workCard{
  title:string;
  description:string;
  resources_Images:string[];
  deployment_Images:string[];
  backgroundClass?:string;
  backgroundImage?:string;
  style?:any;
  languages:string;
  buttonText:string;

  viewclass?:string;
}



