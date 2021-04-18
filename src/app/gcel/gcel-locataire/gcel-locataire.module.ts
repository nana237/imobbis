import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GcelLocatairePageRoutingModule } from './gcel-locataire-routing.module';

import { GcelLocatairePage } from './gcel-locataire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GcelLocatairePageRoutingModule
  ],
  declarations: [GcelLocatairePage]
})
export class GcelLocatairePageModule {}
