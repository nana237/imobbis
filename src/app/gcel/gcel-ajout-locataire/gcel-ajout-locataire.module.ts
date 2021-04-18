import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GcelAjoutLocatairePageRoutingModule } from './gcel-ajout-locataire-routing.module';

import { GcelAjoutLocatairePage } from './gcel-ajout-locataire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GcelAjoutLocatairePageRoutingModule
  ],
  declarations: [GcelAjoutLocatairePage]
})
export class GcelAjoutLocatairePageModule {}
