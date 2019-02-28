import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { contactSection } from "../assets";
import { AboutMeCard } from "../models";

@Component({
  selector: "app-contact-section",
  templateUrl: "./contact-section.component.html",
  styleUrls: ["./contact-section.component.css"]
})
export class ContactSectionComponent implements OnInit {
  FormSize = 1;
  contactForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      message: ["", [Validators.required]]
    });
  }

  title: string = "";
  _title: string = "";
  description: string;
  email: string;
  aboutMe: AboutMeCard;

  ngOnInit() {
    this._title = contactSection.title;
    this.description = contactSection.description;
    this.aboutMe = contactSection.aboutMeCard;
    this.email= contactSection.email;
  } //ngOnInit
  submit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAsDirty();
      return;
    }
    console.log(
      "submited",
      this.f.name.value,
      this.f.email.value,
      this.f.message.value
    );
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
} //class
