import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevenirPrestatairePage } from './devenir-prestataire.page';

const routes: Routes = [
  {
    path: '',
    component: DevenirPrestatairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevenirPrestatairePageRoutingModule {}
