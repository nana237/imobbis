import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationInPage } from './reservation-in.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationInPageRoutingModule {}
