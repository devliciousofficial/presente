import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alerta-validacao',
  templateUrl: './alerta-validacao.component.html',
  styleUrls: ['./alerta-validacao.component.scss'],
})
export class AlertaValidacaoComponent implements OnInit {
  shouldShowComponent(): any {
    throw new Error('Method not implemented.');
  }

  @Input() message: string;
  @Input() field: FormGroup;
  @Input() error: string;

  constructor() { }

  ngOnInit() {}

  mostrarMensagemDeErro(){
   if (this.field.touched && this.field.errors?.[this.error]) {
      return true;
   }
   return false;
  }
}