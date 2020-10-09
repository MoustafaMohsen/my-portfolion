import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
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
import { TweenAnimate, TweenAnimation } from "../models";
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: "app-contact-section",
  templateUrl: "./contact-section.component.html",
  styleUrls: ["./contact-section.component.scss"]
})
export class ContactSectionComponent implements OnInit {
  FormSize = 1;
  contactForm: FormGroup;
  @ViewChild('contact') ContactEle: ElementRef;
  @ViewChild('titleElement') TitleEle: ElementRef;
  @ViewChild('descriptionElement') descriptionEle: ElementRef;

  constructor(formBuilder: FormBuilder, private http:HttpClient, private snake:MatSnackBar, private zone: NgZone) {
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

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ContactCardFadeInUp.Tween();
      }, 100);
    })
  }
  inview = false;
  onInViewportChange(inViewport: boolean) {
    this.inview = inViewport;
    let hasClass = this.ContactEle.nativeElement.classList.contains("active-contact")
    if (inViewport && !hasClass) {
      this.ContactEle.nativeElement.classList.add("active-contact");
    }else{
      this.ContactEle.nativeElement.classList.remove("active-contact");
    }
  }


  // description
  DescriptionFadeInUp = new TweenAnimate();
  onDescriptionViewport(inViewport: boolean) {
    this.DescriptionFadeInUp.inView = inViewport;
    if (inViewport && !this.DescriptionFadeInUp.didRun) {

      this.DescriptionFadeInUp.typewriter = new Typewriter(this.TitleEle.nativeElement, {
        loop: false,
        cursor: "",
        autoStart: false,
        // delay:'Natural',
      });

      this.DescriptionFadeInUp.typewriter2 = new Typewriter(this.descriptionEle.nativeElement, {
        loop: false,
        cursor: "",
        autoStart: false,
        // delay:50,
      });

    }

    if (inViewport) {
      this.zone.runOutsideAngular(() => {
        if (this.DescriptionFadeInUp.didRun === false) {
          this.DescriptionFadeInUp.typewriter.typeString(this._title).start();
          this.DescriptionFadeInUp.typewriter2.typeString(this.description).start();
        }
      });
      this.DescriptionFadeInUp.didRun = true;
    }

    if (!inViewport && this.DescriptionFadeInUp.didRun) {
      this.zone.runOutsideAngular(() => {
      });
    }
  }

  // Main Images
  ContactCardFadeInUp = new TweenAnimate('#contact .contact-card-container', TweenAnimation.FadeInUp);
  onContactCardViewport(inViewport: boolean) {
    this.ContactCardFadeInUp.inView = inViewport;
    if (this.ContactCardFadeInUp.inView) {
      this.zone.runOutsideAngular(() => { this.ContactCardFadeInUp.play() })
    }
  }

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
