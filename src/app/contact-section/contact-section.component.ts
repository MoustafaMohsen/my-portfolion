import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  contactForm:FormGroup;
  constructor(formBuilder:FormBuilder) {
    this.contactForm=formBuilder.group({
      name:[],
      email:[],
      message:[]
    });
   }

  title:string;
  description:string;
  aboutMe:{
    title:string,
    subtitle:string,
    description:string;
  };
  ngOnInit() {
    this.title="Contact Me";
    this.description=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet consectetur cum labore libero odio, accusantium incidunt dolorem unde molestias quos odit nostrum, ducimus adipisci? Assumenda ullam nulla id natus!`;
    this.aboutMe={
      title:"About Me.",
      subtitle:"front-end/back-end developer",
      description:`I'm Moustafa Mohsen, a 23 years-old software engineer student at al Azhar Cairo Engineering school, I'm very fond of code, Every type of it, I have been coding since 19 and I'm not entinding to stop, I like to try new`
    }

    

  }//ngOnInit

}
