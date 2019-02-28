import { Component, OnInit } from '@angular/core';
import { footerSection } from '../assets';
import { FooterSection } from '../models';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent implements OnInit {

  constructor() { }
  rights:string;
  github:string;
  linkedin:string;
  ngOnInit() {
    this.rights = footerSection.rights
    this.github = footerSection.github
    this.linkedin = footerSection.linkedin
  }

}
