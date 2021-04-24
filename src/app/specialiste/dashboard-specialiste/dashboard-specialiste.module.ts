import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardSpecialistePageRoutingModule } from './dashboard-specialiste-routing.module';

import { DashboardSpecialistePage } from './dashboard-specialiste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardSpecialistePageRoutingModule
  ],
  declarations: [DashboardSpecialistePage]
})
export class DashboardSpecialistePageModule {}
