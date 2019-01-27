import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  winHeight
  ngOnInit(){
    /*
    let navbar = document.getElementById("mynavbar");
    setTimeout(()=>{
      let sticky = navbar.offsetTop;
      window.onscroll = function() { myFunction(sticky); };
      
    },2000)

    let myFunction=(offset)=> {
      console.log(window.pageYOffset,offset)
      if (window.pageYOffset >= offset) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
    */
   
   this.winHeight = window.innerHeight;
   console.log(this.winHeight);
  }

  log(){
    console.log("fixnav")
  }
}
