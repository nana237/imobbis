import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppartementPageRoutingModule } from './appartement-routing.module';

import { AppartementPage } from './appartement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppartementPageRoutingModule
  ],
  declarations: [AppartementPage]
})
export class AppartementPageModule {}
