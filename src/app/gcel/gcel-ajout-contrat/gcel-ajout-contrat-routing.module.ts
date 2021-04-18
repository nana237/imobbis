import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GcelAjoutContratPage } from './gcel-ajout-contrat.page';

const routes: Routes = [
  {
    path: '',
    component: GcelAjoutContratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GcelAjoutContratPageRoutingModule {}
