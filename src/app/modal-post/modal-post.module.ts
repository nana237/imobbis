import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPostPageRoutingModule } from './modal-post-routing.module';

import { ModalPostPage } from './modal-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPostPageRoutingModule
  ],
  declarations: [ModalPostPage]
})
export class ModalPostPageModule {}
