import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaintingCardComponent } from './components/painting-card/painting-card.component';
import { AllPaintingsPageComponent } from './pages/all-paintings-page/all-paintings-page.component';
import { PaintingImageComponent } from './components/painting-image/painting-image.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PaintingCardComponent,
    AllPaintingsPageComponent,
    PaintingImageComponent,
    AddPageComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
