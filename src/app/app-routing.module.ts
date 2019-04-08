import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './pages/home/home.component';
import { ArrivalsComponent } from './pages/arrivals/arrivals.component';
import { GlassesComponent } from './pages/glasses/glasses.component';
import { ShirtComponent } from './pages/shirt/shirt.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { SweaterComponent } from './pages/sweater/sweater.component';
import { TuxedoComponent } from './pages/tuxedo/tuxedo.component';
import { WatchesComponent } from './pages/watches/watches.component'; 

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
