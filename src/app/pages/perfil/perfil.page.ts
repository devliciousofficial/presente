import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Parse from 'parse';
import { environment } from '../../../environments/environment';

@Component({
   selector: 'app-perfil',
   templateUrl: './perfil.page.html',
   styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

   constructor(private router: Router) {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';
   }

   ngOnInit() {
   }

   sair() {
      Parse.User.logOut();
      console.log('Logout user');
      this.router.navigate(['inscricao']);
   }

}
