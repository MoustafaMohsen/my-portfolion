import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills-section",
  templateUrl: "./skills-section.component.html",
  styleUrls: ["./skills-section.component.css"]
})
export class SkillsSectionComponent implements OnInit {
  constructor() {}

  title: string;
  description: string;
  ngOnInit() {
    this.title = "Skills";
    this.description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos odit nostrum, ducimus adipisci? Assumenda ullam nulla id natus!`;
  }
}
