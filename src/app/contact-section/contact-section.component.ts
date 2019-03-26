import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { contactSection } from "../assets";
import { AboutMeCard, Ipdata } from "../models";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { throwError } from "rxjs";

@Component({
  selector: "app-contact-section",
  templateUrl: "./contact-section.component.html",
  styleUrls: ["./contact-section.component.css"]
})
export class ContactSectionComponent implements OnInit {
  FormSize = 1;
  contactForm: FormGroup;
  constructor(formBuilder: FormBuilder, private http:HttpClient, private snake:MatSnackBar) {
    this.contactForm = formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.email]],
      message: ["", [Validators.required]]
    });
  }

  title: string = "";
  _title: string = "";
  description: string;
  email: string;
  aboutMe: AboutMeCard;
  loading:boolean=false;

  ngOnInit() {
    this._title = contactSection.title;
    this.description = contactSection.description;
    this.aboutMe = contactSection.aboutMeCard;
    this.email= contactSection.email;
  } //ngOnInit
  submit() {
    if (this.loading) {
      return;
    }
    if (this.contactForm.invalid) {
      this.contactForm.markAsDirty();
      return;
    }
    this.loading=true
    this.getIp().subscribe(
      response=>{
        let data = response as Ipdata.Ipdata
        this.loading=true;

        let filterThreats = contactSection.filterThreats;
        if ( filterThreats && this.isAny(data.threat) ) {
          // block access for attackers
          let errorMessage="Service error, please use email instead";
          this.snake.open(errorMessage,'X',{duration:10000})  
          return ;
        }

        let successMessage="Sending Message";
        this.snake.open(successMessage,'X',{duration:10000});

        //submit form
        this.submitForm(JSON.stringify(data));

      },
      err=>{
        let errorMessage="Service error, please use email instead";
        this.snake.open(errorMessage,'X',{duration:10000})
        this.loading=true;
      }
    )
  }

  isAny(obj){
    for (const state in obj) {
      let value = obj[state];
      if (value && typeof value === "boolean") {
        return true;
      }
    }
    return false;
  }

  get f() {
    return this.contactForm.controls;
  }

  typeEffect(_title, interval) {
    var stringToArray = (input: string): string[] => {
      if (input === null) return [];
      return input.split("");
    };

    let chars = stringToArray(_title);
    chars = chars.reverse();

    let i = chars.length - 1;
    if (i > 0) {
      let inter = setInterval(() => {
        this.title = this.title + chars[i];
        if (i == 0) {
          clearInterval(inter);
        }
        i--;
      }, interval);
    }
  } //typeEffect

  getIp(){
    let key=contactSection.formspreeapikey;
    let lookupUrl=`https://api.ipdata.co/es?api-key=${key}`;
    return this.http.get(lookupUrl)
  }

  submitForm(clientdata:string){
    let url = `https://formspree.io/${contactSection.formEmail}`;
    let form = document.getElementById('contact_form') as HTMLFormElement;
    form.action = url;
    let data = document.getElementById('contact_form_data') as HTMLInputElement;
    data.value = clientdata;
    data.name = "client_data";
    form.submit();
  }

} //class
