import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgxLoadingModule, ngxLoadingAnimationTypes  } from 'ngx-loading';
import { AppComponent } from './app.component';
import { HomeComponent }  from './pages/home/home.component';
import { ArrivalsComponent } from './pages/arrivals/arrivals.component';
import { GlassesComponent } from './pages/glasses/glasses.component';
import { ShirtComponent } from './pages/shirt/shirt.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { SweaterComponent } from './pages/sweater/sweater.component';
import { TuxedoComponent } from './pages/tuxedo/tuxedo.component';
import { WatchesComponent } from './pages/watches/watches.component';
import { NavComponent } from './components/nav-bar/nav.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { MainBlockComponent } from './components/main-block/main-block.component';
import { DataService } from './services/data.service';

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
    MainBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
