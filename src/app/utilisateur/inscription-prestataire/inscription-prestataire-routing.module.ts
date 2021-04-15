import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionPrestatairePage } from './inscription-prestataire.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionPrestatairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionPrestatairePageRoutingModule {}
