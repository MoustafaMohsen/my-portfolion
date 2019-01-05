import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  constructor() { }
  showElements=false;
  ngOnInit() {
    console.log("show elements =",this.showElements);

    setTimeout(() => {
      
      this.showElements=true;
      console.log("show elements =",this.showElements);
    }, 10000);
  }

}
