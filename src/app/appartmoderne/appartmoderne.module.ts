import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppartmodernePageRoutingModule } from './appartmoderne-routing.module';

import { AppartmodernePage } from './appartmoderne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppartmodernePageRoutingModule
  ],
  declarations: [AppartmodernePage]
})
export class AppartmodernePageModule {}
