import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevenirPrestatairePageRoutingModule } from './devenir-prestataire-routing.module';

import { DevenirPrestatairePage } from './devenir-prestataire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevenirPrestatairePageRoutingModule
  ],
  declarations: [DevenirPrestatairePage]
})
export class DevenirPrestatairePageModule {}
