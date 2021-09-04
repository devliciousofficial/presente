import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { AlertaValidacaoComponent } from '../components/alerta-validacao/alerta-validacao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CadastroPage,
    AlertaValidacaoComponent
  ]
})
export class CadastroPageModule {}
