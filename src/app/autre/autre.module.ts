import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutrePageRoutingModule } from './autre-routing.module';

import { AutrePage } from './autre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutrePageRoutingModule
  ],
  declarations: [AutrePage]
})
export class AutrePageModule {}
