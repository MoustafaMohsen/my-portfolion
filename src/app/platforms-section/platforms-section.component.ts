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
    this.description=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos odit nostrum, ducimus adipisci? Assumenda ullam nulla id natus!`;

  }

}
