import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GcelInfoLocatairePage } from './gcel-info-locataire.page';

const routes: Routes = [
  {
    path: '',
    component: GcelInfoLocatairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GcelInfoLocatairePageRoutingModule {}
