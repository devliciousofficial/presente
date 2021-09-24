import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Parse from 'parse';

@Component({
   selector: 'app-perfil',
   templateUrl: './perfil.page.html',
   styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

   constructor(private router: Router) {
      //TODO - guardar ID do app e Chave JS na pasta environment
      Parse.initialize('3auUTevR9wvgsYWt0BqYoQUHQV8Uz634k48WGhIk', 'aB1zPk1OjreFfXAzU1ECz86lJ0u8wqiQPcMpVE2D');
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
