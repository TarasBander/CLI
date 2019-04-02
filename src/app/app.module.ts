import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent }  from './home/home.component';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { GlassesComponent } from './glasses/glasses.component';
import { ShirtComponent } from './shirt/shirt.component';
import { ShoesComponent } from './shoes/shoes.component';
import { SweaterComponent } from './sweater/sweater.component';
import { TuxedoComponent } from './tuxedo/tuxedo.component';
import { WatchesComponent } from './watches/watches.component';
import { NavComponent } from './nav-bar/nav.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlassesComponent,
    ArrivalsComponent,
    ShirtComponent,
    ShoesComponent,
    SweaterComponent,
    TuxedoComponent,
    WatchesComponent,
    NavComponent,
    SpecialOffersComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
