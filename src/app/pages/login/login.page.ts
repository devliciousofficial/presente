import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import Parse from 'parse';


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
      //TODO - guardar ID do app e Chave JS na pasta environment
      Parse.initialize('3auUTevR9wvgsYWt0BqYoQUHQV8Uz634k48WGhIk', 'aB1zPk1OjreFfXAzU1ECz86lJ0u8wqiQPcMpVE2D');
      Parse.serverURL = 'https://parseapi.back4app.com';
   }

   ngOnInit() { this.form = new LoginPageForm(this.formBuilder).createForm(); }
   loginTeste() { this.router.navigate(['tabs']); }
   cadastro() { this.router.navigate(['cadastro']); }

   // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
   login() {
      (async () => {
         try {
            // Pass the username and password to logIn function
            const user = await Parse.User.logIn(this.email, this.password);
            // Do stuff after successful login
            console.log('Logged in user', user);
            this.router.navigate(['tabs']);
         } catch (error) {
            console.error('Error while logging in user', error);
         }
      })();
   }
}
