import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GcelLocatairePage } from './gcel-locataire.page';

const routes: Routes = [
  {
    path: '',
    component: GcelLocatairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GcelLocatairePageRoutingModule {}
