import { Component, OnInit } from '@angular/core';
import { blogSection } from '../assets';

declare var MediumWidget

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent implements OnInit {

  title:string="";
  _title:string="";
  description:string;

  constructor() { }

  ngOnInit() {

    MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/directcode",postsPerLine:4,limit:4,picture:"big",fields:["description","author","claps"],ratio:"landscape"}});

    this._title=blogSection.title;
    this.description=blogSection.description;

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


}
