import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GcelInfoLocatairePageRoutingModule } from './gcel-info-locataire-routing.module';

import { GcelInfoLocatairePage } from './gcel-info-locataire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GcelInfoLocatairePageRoutingModule
  ],
  declarations: [GcelInfoLocatairePage]
})
export class GcelInfoLocatairePageModule {}
