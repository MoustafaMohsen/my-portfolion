import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
  FormSize=1;
  contactForm:FormGroup;
  constructor(formBuilder:FormBuilder) {
    this.contactForm=formBuilder.group({
      name:["",[Validators.required]],
      email:["",[Validators.required]],
      message:["",[Validators.required]]
    });
   }

   title:string="";
   _title:string="";
   description:string;
  aboutMe:{
    title:string,
    subtitle:string,
    description:string;
  };
  ngOnInit() {
    this._title="Contact Me";
    this.description=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos odit nostrum, ducimus adipisci? Assumenda ullam nulla id natus!`;
    this.aboutMe={
      title:"About Me.",
      subtitle:"front-end/back-end developer",
      description:`I'm Moustafa Mohsen, a 23 years-old Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos odit nostrum, ducimus adipisci? Assumenda ullam nulla id natus!`
    }    

  }//ngOnInit
  submit(){
  console.log("submited",this.f.name.value,this.f.email.value,this.f.message.value);
  
  }

  get f(){
    return this.contactForm.controls
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

}//class
