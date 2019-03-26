import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent }  from './home.component';
import { ArrivalsComponent } from './arrivals.component';
import { GlassesComponent } from './glasses.component';
import { ShirtComponent } from './shirt.component';
import { ShoesComponent } from './shoes.component';
import { SweaterComponent } from './sweater.component';
import { TuxedoComponent } from './tuxedo.component';
import { WatchesComponent } from './watches.component';
import { NavComponent } from './nav.component';


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
    NavComponent
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
