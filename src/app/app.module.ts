import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { OurPricingComponent } from './our-pricing/our-pricing.component';
import { SpecialNewsComponent } from './special-news/special-news.component';
import { CardServiceComponent } from './what-we-offer/card-service/card-service.component';
import { PricingBoxComponent } from './our-pricing/pricing-box/pricing-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WhoWeAreComponent,
    WhatWeOfferComponent,
    OurPricingComponent,
    SpecialNewsComponent,
    CardServiceComponent,
    PricingBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
