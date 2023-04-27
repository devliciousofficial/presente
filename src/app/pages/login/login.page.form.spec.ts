import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';

describe('loginPageForm', () => {

    let loginPageForm: LoginPageForm;
    let form: FormGroup;

    beforeEach(() => {
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    });

    it('Deveria criar um formulario vasio', () => {
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual('');
        expect(form.get('email').valid).toBeFalsy('');
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual('');
        expect(form.get('password').valid).toBeFalsy('');
    });

    it('Deveria exibir mensagem de email', () => {
        form.get('email').setValue('invalid email');
        expect(form.get('email').valid).toBeFalsy();
    });

    it('Deveria receber apenas emails validos', () => {
        form.get('email').setValue('valid@email.com');
        expect(form.get('email').valid).toBeTruthy();
    });

    it('Deveria ter um form valido', () => {
        form.get('email').setValue('valid@email.com');
        form.get('password').setValue('anyPassword');
        expect(form.valid).toBeTruthy();
    });
});
