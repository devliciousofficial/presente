import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RedefinirPageForm } from './redefinir.page.form';

import Parse from 'parse';
import { environment } from '../../../environments/environment';

@Component({
   selector: 'app-redefinir',
   templateUrl: './redefinir.page.html',
   styleUrls: ['./redefinir.page.scss'],
})
export class RedefinirPage implements OnInit {

   form: FormGroup;
   email: string;

   constructor(private router: Router, private formBuilder: FormBuilder) {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';
   }

   ngOnInit() {this.form = new RedefinirPageForm(this.formBuilder).createForm();}

   redefnirSenhaUsuario() {
      (async () => {
         try {
            // Pass the username and password to logIn function
            const result = await Parse.User.requestPasswordReset(this.email);
            // Password reset request was sent successfully
            console.log('Reset password email sent successfully');
            this.router.navigate(['login']);
         } catch (error) {
            console.error('Error while creating request to reset user password', error);
         }
      })();

   }
}


