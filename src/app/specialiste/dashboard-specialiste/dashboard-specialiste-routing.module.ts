import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardSpecialistePage } from './dashboard-specialiste.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardSpecialistePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardSpecialistePageRoutingModule {}
