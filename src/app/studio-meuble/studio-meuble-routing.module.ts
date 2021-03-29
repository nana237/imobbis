import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudioMeublePage } from './studio-meuble.page';

const routes: Routes = [
  {
    path: '',
    component: StudioMeublePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudioMeublePageRoutingModule {}
