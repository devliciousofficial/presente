import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedefinirPageRoutingModule } from './redefinir-routing.module';

import { RedefinirPage } from './redefinir.page';
import { AlertaValidacaoComponent } from 'src/app/components/alerta-validacao/alerta-validacao.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RedefinirPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
     RedefinirPage,
     AlertaValidacaoComponent

   ]
})
export class RedefinirPageModule {}
