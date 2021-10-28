/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroPageForm } from './cadastro.page.form';

import Parse from 'parse';
import { environment } from '../../../environments/environment';
import { AlertController } from '@ionic/angular';

//TODO - criar uma rota segura por meio de guards após criar conta e tentar fazer login//

@Component({
   selector: 'app-cadastro',
   templateUrl: './cadastro.page.html',
   styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

   form: FormGroup;

   name: string = '';
   username: string = '';
   email: string = '';
   password: string = '';
   confirmPassword: string = '';

   constructor(private router: Router, private formBuilder: FormBuilder, private alertController: AlertController) {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';
   }

   ngOnInit() { this.form = new CadastroPageForm(this.formBuilder).createForm(); }


   // TODO: Criar um componente para lidar com os erros de login //
   async exibirAlertaSenha() {
      const meuAlerta = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: 'Erro ao criar cadastro!',
         message: 'As senhas não coincidem. Tente novamente',
         buttons: ['OK']
      });

      await meuAlerta.present();
   }

   async exibirAlertaUsuario() {
      const meuAlerta = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: 'Erro ao criar cadastro!',
         message: 'Usuário já existe. Escolha outro email e tente novamente.',
         buttons: ['OK']
      });

      await meuAlerta.present();
   }

   async exibirAlertaCamposObrigatorios() {
      const meuAlerta = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: 'Erro ao criar cadastro!',
         message: 'Não foi possível criar cadastro. Preencha os campos obrigatórios',
         buttons: ['OK']
      });

      await meuAlerta.present();
   }

   //TODO: Implemntar o cadastro com as tedes sociais - Funcoes apenas com rotas para a tela principal do app//
   cadastroComFacebook() { this.router.navigate(['tabs']); };
   cadastroComTwitter() { this.router.navigate(['tabs']); };

   cadastrar() {
      (async () => {
         const user = new Parse.User();
         user.set('name', this.name);
         user.set('username', this.username);
         user.set('email', this.username);
         user.set('password', this.password);

         try {
            if (this.password !== this.confirmPassword) {
               this.password = '';
               this.confirmPassword = '';
               this.exibirAlertaSenha();
               throw new Error('As senhas não coincidem. Tente novamente');
            }

            const userResult = await user.signUp();
            Parse.User.logOut();
            this.router.navigate(['email-enviado']);
            console.log('User signed up. Please verify your e-mail');

         } catch (error) {
            console.error('Error while signing up user', error);
            if (error.code === 202){
               this.exibirAlertaUsuario();
               this.name = '';
               this.username = '';
               this.password = '';
               this.confirmPassword = '';
            }

            else if (!this.username || !this.username.length || error.code === 142) {
               this.exibirAlertaCamposObrigatorios();
               throw new Error('Não foi possível criar cadastro. Preencha os campos obrigatórios');
             }
         }
      })();
   }
}
