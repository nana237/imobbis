import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationInPageRoutingModule } from './reservation-in-routing.module';

import { ReservationInPage } from './reservation-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationInPageRoutingModule
  ],
  declarations: [ReservationInPage]
})
export class ReservationInPageModule {}
