import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailRedefinicaoPageRoutingModule } from './email-redefinicao-routing.module';

import { EmailRedefinicaoPage } from './email-redefinicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailRedefinicaoPageRoutingModule
  ],
  declarations: [EmailRedefinicaoPage]
})
export class EmailRedefinicaoPageModule {}
