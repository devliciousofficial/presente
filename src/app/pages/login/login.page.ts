/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

import Parse from 'parse';
import { environment } from '../../../environments/environment';
import { AlertController } from '@ionic/angular';


@Component({
   selector: 'app-login',
   templateUrl: './login.page.html',
   styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   form: FormGroup;

   username: string = '';
   email: string = '';
   password: string = '';

   constructor(private router: Router, private formBuilder: FormBuilder, private alertController: AlertController) {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';
   }

   ngOnInit() { this.form = new LoginPageForm(this.formBuilder).createForm(); }

   //TODO: Criar um componente para lidar com todos os erros abaixo//
   async exibirAlertaUsuarioOuSenhaInvalido() {
      const meuAlerta = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: 'Erro ao tentar fazer Login!',
         message: 'Usuario ou Senha Inválido.',
         buttons: ['OK']
      });

      await meuAlerta.present();
   }

   async exibirAlertaEmailNaoVerificado() {
      const meuAlerta = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: 'Conta não verificada!',
         message: 'Verifique sua conta atráves do link enviado por email.',
         buttons: ['OK']
      });

      await meuAlerta.present();
   }

   async exibirAlertaUsuarioSenhaObrigatorios() {
      const meuAlerta = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: 'Erro ao tentar fazer Login!',
         message: 'Verifique se todos os campos foram preenchidos.',
         buttons: ['OK']
      });

      await meuAlerta.present();
   }

    //TODO: Implemntar o login com as tedes sociais - Funcoes apenas com rotas para a tela principal do app//
    loginComFacebook() { this.router.navigate(['tabs']); };
    loginComTwitter() { this.router.navigate(['tabs']); };

   // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
   login() {
      (async () => {
         try {
            // Pass the username and password to logIn function
            const user = await Parse.User.logIn(this.email, this.password);
            const currentUser = Parse.User.current();
            // Do stuff after successful login
            console.log('Logged in user', user);
            this.router.navigate(['tabs']);

         } catch (error) {
            console.error('Error while logging in user', error);

            if (error.code === 101) {
               this.username = '';
               this.password = '';
               this.exibirAlertaUsuarioOuSenhaInvalido();
            }

            else if (error.code === 205) {
               this.exibirAlertaEmailNaoVerificado();
            }

            else if (error.code === 200 || error.code === 201) {
               this.exibirAlertaUsuarioSenhaObrigatorios();
            }
         }


      })();
   }
}
