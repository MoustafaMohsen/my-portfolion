import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-mmlogo',
  templateUrl: './mmlogo.component.html',
  styleUrls: ['./mmlogo.component.css']
})
export class MMLogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  wordHeight(){
    let wordBox = $('#word-box');
    let height = wordBox.height();
    let style={
      'font-size': height + 'px',
      'line-height': height + 'px'
    }
    return style;
  }

}
