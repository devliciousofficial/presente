/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroPageForm } from './cadastro.page.form';
import Parse from 'parse';


@Component({
   selector: 'app-cadastro',
   templateUrl: './cadastro.page.html',
   styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

   username: string;
   password: string;
   email: string;
   form: FormGroup;

   constructor(private router: Router, private formBuilder: FormBuilder) {
      //TODO - guardar ID do app e Chave JS na pastar environment
      Parse.initialize('3auUTevR9wvgsYWt0BqYoQUHQV8Uz634k48WGhIk', 'aB1zPk1OjreFfXAzU1ECz86lJ0u8wqiQPcMpVE2D');
      Parse.serverURL = 'https://parseapi.back4app.com';
   }

   ngOnInit() { this.form = new CadastroPageForm(this.formBuilder).createForm(); }

   cadastroComFacebook() { this.router.navigate(['tabs']) };
   cadastroComTwitter() { this.router.navigate(['tabs']) };

   cadastrar() {
      (async () => {
         const user = new Parse.User();
         user.set('username', this.username);
         user.set('email', this.email);
         user.set('password', this.password);

         try {
            const userResult = await user.signUp();
            console.log('User signed up', userResult);
         } catch (error) {
            console.error('Error while signing up user', error);
         }
      })();
   }

   cadastro() { this.router.navigate(['tabs']) };

}
