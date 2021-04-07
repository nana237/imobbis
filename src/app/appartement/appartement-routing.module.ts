import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppartementPage } from './appartement.page';

const routes: Routes = [
  {
    path: '',
    component: AppartementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppartementPageRoutingModule {}
