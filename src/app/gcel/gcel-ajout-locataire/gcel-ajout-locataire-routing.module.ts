import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GcelAjoutLocatairePage } from './gcel-ajout-locataire.page';

const routes: Routes = [
  {
    path: '',
    component: GcelAjoutLocatairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GcelAjoutLocatairePageRoutingModule {}
