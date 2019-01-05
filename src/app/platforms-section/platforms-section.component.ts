import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platforms-section',
  templateUrl: './platforms-section.component.html',
  styleUrls: ['./platforms-section.component.css']
})
export class PlatformsSectionComponent implements OnInit {

  constructor() { }
  title:string;
  description:string;
  ngOnInit() {

    this.title = "Platforms"
    this.description="lorem"

  }

}
