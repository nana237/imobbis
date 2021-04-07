import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HightechPageRoutingModule } from './hightech-routing.module';

import { HightechPage } from './hightech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HightechPageRoutingModule
  ],
  declarations: [HightechPage]
})
export class HightechPageModule {}
