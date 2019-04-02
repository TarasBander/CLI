import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { GlassesComponent } from './glasses/glasses.component';
import { ShirtComponent } from './shirt/shirt.component';
import { ShoesComponent } from './shoes/shoes.component';
import { SweaterComponent } from './sweater/sweater.component';
import { TuxedoComponent } from './tuxedo/tuxedo.component';
import { WatchesComponent } from './watches/watches.component'; 

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
