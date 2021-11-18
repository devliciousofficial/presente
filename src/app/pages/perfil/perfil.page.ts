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

   avatar: string;
   userName: string;

   constructor(private router: Router) {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';

      // Retrieve current user data //
      (async () => {
         // Creates a new Query object to help us fetch user objects
         const currentUser = Parse.User.current();
         const userName = currentUser.get('username');
         const query = new Parse.Query('User');

         query.equalTo('username', userName);
         query.select('avatar', 'name');

         try {
           // Executes the query, which returns an array of CURRENT User data
           const results = await query.find();

           for (const object of results) {
					 const name = object.get('name');
                const image = object.get('avatar');
                const avatar = image.url();
                this.userName = name;
                this.avatar = avatar;
           }

         } catch (error) {
           console.log(`Error: ${(error)}`);
         }
       })();
   }

   ngOnInit() {
   }

   sair() {
      Parse.User.logOut();
      console.log('Logout user');
      this.router.navigate(['inscricao']);
   }
}
