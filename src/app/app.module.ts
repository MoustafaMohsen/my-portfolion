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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule, MatCheckboxModule,MatButtonToggleModule,MatInputModule,MatSliderModule,
  MatCardModule,MatProgressBarModule,MatToolbarModule,MatAutocompleteModule,
  MatFormFieldModule,MatSlideToggleModule,MatSnackBarModule,MatDividerModule, MatMenuModule,
  MatIconModule, MatExpansionModule, MatListModule,MatTooltipModule,MatSidenavModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageGlareComponent } from './image-glare/image-glare.component';
import { routes } from './routes';
import {  AnimateOnScrollModule } from './animate-on-scroll';
import { MMLogoComponent } from './hero-section/mmlogo/mmlogo.component';
import { StickyHeaderDirective } from './directives/sticky-header.directive';
import { OnView } from './directives/OnView.directive';
// scroll animation
//import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
document.title = "Welcome"

const matrial = [
  MatButtonModule, MatCheckboxModule,MatButtonToggleModule,MatInputModule,MatSliderModule,
  MatCardModule,MatProgressBarModule,MatToolbarModule,MatAutocompleteModule,
  MatFormFieldModule,MatSlideToggleModule,MatSnackBarModule,MatDividerModule, MatMenuModule,
  MatIconModule, MatExpansionModule, MatListModule,MatTooltipModule,MatSidenavModule
];

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HeroSectionComponent,
    SkillsSectionComponent,
    PlatformsSectionComponent,
    WorkSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent,
    ImageGlareComponent,
    MMLogoComponent,

    //test directive
    //AppearDirective
    //directives
    StickyHeaderDirective,
    OnView

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    matrial,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64] // [x, y]
    }),
    AnimateOnScrollModule.forRoot(),
    AngularStickyThingsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
