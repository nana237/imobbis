import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPostPage } from './modal-post.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPostPageRoutingModule {}
