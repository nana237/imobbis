import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GcelAjoutContratPageRoutingModule } from './gcel-ajout-contrat-routing.module';

import { GcelAjoutContratPage } from './gcel-ajout-contrat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GcelAjoutContratPageRoutingModule
  ],
  declarations: [GcelAjoutContratPage]
})
export class GcelAjoutContratPageModule {}
