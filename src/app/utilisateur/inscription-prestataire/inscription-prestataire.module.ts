import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionPrestatairePageRoutingModule } from './inscription-prestataire-routing.module';

import { InscriptionPrestatairePage } from './inscription-prestataire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionPrestatairePageRoutingModule
  ],
  declarations: [InscriptionPrestatairePage]
})
export class InscriptionPrestatairePageModule {}
