import { Component, OnInit ,Input} from '@angular/core';




@Component({
  selector: 'app-image-glare',
  templateUrl: './image-glare.component.html',
  styleUrls: ['./image-glare.component.css'],
  animations:[
    
  ]
})
export class ImageGlareComponent implements OnInit {
  @Input() imageUrl:string="https://miro.medium.com/max/610/1*FIL7OY2C71HPz9vNVeHsAw.png";
  @Input() width:number=305;
  @Input() height:number=216;
  @Input() showGlare=true;
  glareStyles
  state = 'hide'
  constructor() { }

  ngOnInit() {
    //setInterval(()=>{this.showGlare=!this.showGlare},2000);

    this.glareStyles={
      '-webkit-mask': 'url("'+this.imageUrl+'") center',
      'mask': 'url("'+this.imageUrl+'") center',
      display:'block'
    }
  }


  calculaterPositioBefore(width){
    return -width;
  }
  calculaterPositionAfter(width){
    return width*0.3
  }



  get imageStyles(){
    let imageStyles={
      'width': this.width+'px',
      'height': this.height+'px',
      'background-position': this.calculaterPositioBefore(this.width)+'px 0'
    }
    if(this.showGlare==false){
      return imageStyles;
    }
    let mask={
      imageStyles,
      'background-position': this.calculaterPositionAfter(this.width)+'px 0',
      transition: 'all 500ms ease 0s',
      }
      return mask;
  }
}
