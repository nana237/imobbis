import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TchatPPageRoutingModule } from './tchat-p-routing.module';

import { TchatPPage } from './tchat-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TchatPPageRoutingModule
  ],
  declarations: [TchatPPage]
})
export class TchatPPageModule {}
