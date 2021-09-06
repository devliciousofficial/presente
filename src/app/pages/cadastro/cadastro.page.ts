import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroPageForm } from './cadastro.page.form';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() { this.form = new CadastroPageForm(this.formBuilder).createForm(); }
  cadastro(){this.router.navigate(['tabs'])};

}