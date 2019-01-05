import { Component, OnInit } from '@angular/core';
import { Availableimages } from '../assets';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})

export class WorkSectionComponent implements OnInit {

  constructor() { }
  workcard:workCard;
  ngOnInit() {
    this.workcard={
      title:"Fridge Nottes",
      description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem eveniet officiis maiores sit molestias architecto quae necessitatibus quidem veritatis iure voluptatum at, tempora tenetur non. Porro harum soluta fugiatt.`,

      backgroundDesktop:Availableimages.fridgenotes_desktop,
      languages:"Html, CSS, C#, TypeScript",
      buttonText:"Visit Website",
      resources_Images:[
        Availableimages.angular,
        Availableimages.aspcore,
        Availableimages.mysql
      ],
      deployment_Images:[
        Availableimages.github,
        Availableimages.digitalocean
      ],
    };

  }//ngOnInit

}

interface workCard{
  title:string;
  description:string;
  resources_Images:string[];
  deployment_Images:string[];
  backgroundDesktop:string;
  languages:string;
  buttonText:string;
}



