import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import Parse from 'parse';
import { environment } from '../../../environments/environment';

@Component({
   selector: 'app-inscricao',
   templateUrl: './inscricao.page.html',
   styleUrls: ['./inscricao.page.scss'],
})
export class InscricaoPage implements OnInit {

   constructor(private router: Router) {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';
   }

   ngOnInit() {
   }

   cadastro() { this.router.navigate(['cadastro']); }
   cadastroComFacebook() { this.router.navigate(['tabs']); };
   cadastroComTwitter() { this.router.navigate(['tabs']); };

}
