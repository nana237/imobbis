import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillaMeublePage } from './villa-meuble.page';

const routes: Routes = [
  {
    path: '',
    component: VillaMeublePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillaMeublePageRoutingModule {}
