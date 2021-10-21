import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

import Parse from 'parse';
import { environment } from '../../../environments/environment';


@Component({
   selector: 'app-login',
   templateUrl: './login.page.html',
   styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   form: FormGroup;

   username: string;
   email: string;
   password: string;

   constructor(private router: Router, private formBuilder: FormBuilder) {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';
   }

   ngOnInit() { this.form = new LoginPageForm(this.formBuilder).createForm(); }
   loginTeste() { this.router.navigate(['tabs']); }
   redefinirSenha(){ this.router.navigate(['redefinir']); }

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
         }
      })();
   }
}
