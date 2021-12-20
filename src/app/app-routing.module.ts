import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FusionZoneComponent } from './components/fusion-zone/fusion-zone.component';

const routes: Routes = [
  {
    path: '',
    component: FusionZoneComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
