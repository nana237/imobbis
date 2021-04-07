import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TchatPPage } from './tchat-p.page';

const routes: Routes = [
  {
    path: '',
    component: TchatPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TchatPPageRoutingModule {}
