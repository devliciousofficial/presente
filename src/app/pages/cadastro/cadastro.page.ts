/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroPageForm } from './cadastro.page.form';

import Parse from 'parse';
import { environment } from '../../../environments/environment';

//TODO - criar uma rota segura por meio de guards após criar conta e tentar fazer login//

@Component({
   selector: 'app-cadastro',
   templateUrl: './cadastro.page.html',
   styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

   form: FormGroup;

   name: string;
   username: string;
   email: string;
   password: string;
   confirmPassword: string;

   constructor(private router: Router, private formBuilder: FormBuilder) {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';
   }

   ngOnInit() { this.form = new CadastroPageForm(this.formBuilder).createForm(); }

   cadastroComFacebook() { this.router.navigate(['tabs']);};
   cadastroComTwitter() { this.router.navigate(['tabs']);};

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
               throw new Error('As senhas não coincidem. Tente novamente');
            }

            const userResult = await user.signUp();
            Parse.User.logOut();
            this.router.navigate(['login']);
            console.log('User signed up. Please verify your e-mail');

         } catch (error) {
            console.error('Error while signing up user', error);
         }
      })();
   }
}
