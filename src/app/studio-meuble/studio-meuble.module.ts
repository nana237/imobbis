import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudioMeublePageRoutingModule } from './studio-meuble-routing.module';

import { StudioMeublePage } from './studio-meuble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudioMeublePageRoutingModule
  ],
  declarations: [StudioMeublePage]
})
export class StudioMeublePageModule {}
