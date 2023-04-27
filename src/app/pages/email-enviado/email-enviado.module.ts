import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailEnviadoPageRoutingModule } from './email-enviado-routing.module';

import { EmailEnviadoPage } from './email-enviado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailEnviadoPageRoutingModule
  ],
  declarations: [EmailEnviadoPage]
})
export class EmailEnviadoPageModule {}
