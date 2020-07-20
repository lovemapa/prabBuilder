import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlankComponent } from './Layout/blank/blank.component';
import { FullComponentComponent } from './Layout/full-component/full-component.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AosToken, aos } from './aos';
import { HomeComponent } from './ComponentPackage/home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './ComponentPackage/navbar/navbar.component';
import { ToolbarComponent } from './ComponentPackage/toolbar/toolbar.component';
import { WhateverOfferComponent } from './ComponentPackage/whatever-offer/whatever-offer.component';
import { AboutUSComponent } from './ComponentPackage/about-us/about-us.component';
import { RecentProjectComponent } from './ComponentPackage/recent-project/recent-project.component';
import { ReviewComponent } from './ComponentPackage/review/review.component';
import { ContectusComponent } from './ComponentPackage/contectus/contectus.component';
import { TestimonialComponent } from './ComponentPackage/testimonial/testimonial.component';
import { FooterComponent } from './ComponentPackage/footer/footer.component'
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    FullComponentComponent,
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    WhateverOfferComponent,
    AboutUSComponent,
    RecentProjectComponent,
    ReviewComponent,
    ContectusComponent,
    TestimonialComponent,
    FooterComponent,

    // RouterModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    MaterialModule ,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: AosToken, useValue: aos },
    // HashLocationStrategy,
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
