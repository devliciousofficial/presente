import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.page.html',
  styleUrls: ['./inscricao.page.scss'],
})
export class InscricaoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cadastro(){ this.router.navigate(['cadastro']); }
  cadastroComFacebook(){this.router.navigate(['tabs']);};
  cadastroComTwitter(){this.router.navigate(['tabs']);};

}
