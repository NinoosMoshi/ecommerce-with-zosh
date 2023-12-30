import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './module/feture/home/home.component';
import { MainCarouselComponent } from './module/feture/home/main-carousel/main-carousel.component';
import { ProductCardSliderComponent } from './module/feture/home/product-card-slider/product-card-slider.component';
import { SliderProductCardComponent } from './module/feture/home/slider-product-card/slider-product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductCardSliderComponent,
    SliderProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
