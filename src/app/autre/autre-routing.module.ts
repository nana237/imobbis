import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutrePage } from './autre.page';

const routes: Routes = [
  {
    path: '',
    component: AutrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutrePageRoutingModule {}
