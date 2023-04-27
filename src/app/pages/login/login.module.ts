import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { AlertaValidacaoComponent } from '../../components/alerta-validacao/alerta-validacao.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [
    LoginPage,
    AlertaValidacaoComponent
  ]
})
export class LoginPageModule {}
