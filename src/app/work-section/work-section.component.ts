import { Component, OnInit } from '@angular/core';
import { Availableimages, workCard, workSection } from '../assets';

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

  project:workCard;

  test:string="";

  ngOnInit() {
    this._title=workSection.title;
    this.description=workSection.description;

    this.test=Availableimages.test;
    this.Cards=workSection.mainProjects;
    this.smallCards=workSection.otherProjects;

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

  openModal(workcard:workCard){
    this.setproject(workcard);
    let $_ = $ as any;
    $_("#exampleModal").modal('show');
    
  }
  closeModal(){
    let $_ = $ as any;
    $_("#exampleModal").modal('hide');
  }

  setproject(workcard:workCard){
    this.project = workcard;
    console.log(this.project);
    
  }
  
}//class




