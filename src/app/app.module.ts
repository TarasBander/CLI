import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

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


const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'glasses', component: GlassesComponent},
    { path: 'shirt', component: ShirtComponent},
    { path: 'shoes', component: ShoesComponent},
    { path: 'sweater', component: SweaterComponent},
    { path: 'tuxedo', component: TuxedoComponent},
    { path: 'watches', component: WatchesComponent},
    { path: 'arrivals', component: ArrivalsComponent}
];

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
    SpecialOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
