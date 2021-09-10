import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscricaoPageRoutingModule } from './inscricao-routing.module';

import { InscricaoPage } from './inscricao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscricaoPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InscricaoPage]
})
export class InscricaoPageModule {}
