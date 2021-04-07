import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HightechPage } from './hightech.page';

const routes: Routes = [
  {
    path: '',
    component: HightechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HightechPageRoutingModule {}
