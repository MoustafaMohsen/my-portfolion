import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PlatformsSectionComponent } from './platforms-section/platforms-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HeroSectionComponent,
    SkillsSectionComponent,
    PlatformsSectionComponent,
    WorkSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }