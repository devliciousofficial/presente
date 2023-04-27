import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AlertaValidacaoComponent } from './alerta-validacao.component';

describe('AlertaValidacaoComponent', () => {
  let component: AlertaValidacaoComponent;
  let fixture: ComponentFixture<AlertaValidacaoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaValidacaoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertaValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Deveria mostrar uma mensagem de erro ao tocar no campo e houver erro', () => {

    component.field = new FormGroup({anyField: new FormControl()});
    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error = 'anyError';

    expect(component.mostrarMensagemDeErro()).toBeTruthy();

  });

  it('Deveria esconder a mensagem de erro quando o campo não for tocado', () => {

    component.field = new FormGroup({anyField: new FormControl()});
    component.field.setErrors({anyError: true});
    component.error = 'anyError';

    expect(component.mostrarMensagemDeErro()).toBeFalsy();

  });

  it('Deveria esconder a mensagem de erro quando o campo for tocado, as não houver erros', () => {

    component.field = new FormGroup({anyField: new FormControl()});
    component.field.markAsTouched();
    component.error = 'anyError';

    expect(component.mostrarMensagemDeErro()).toBeFalsy();


  });

  it('Deveria esconder a mensagem de erro quando o campo for tocado e tiver erro, mas o erro é diferente', () => {

    component.field = new FormGroup({anyField: new FormControl()});
    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error = 'anotherError';

    expect(component.mostrarMensagemDeErro()).toBeFalsy();

  });

});
