import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VillaMeublePageRoutingModule } from './villa-meuble-routing.module';

import { VillaMeublePage } from './villa-meuble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillaMeublePageRoutingModule
  ],
  declarations: [VillaMeublePage]
})
export class VillaMeublePageModule {}
