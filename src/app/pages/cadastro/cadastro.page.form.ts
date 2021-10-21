import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class CadastroPageForm {

   private formBuilder: FormBuilder;
   constructor(formBuilder: FormBuilder) {
      this.formBuilder = formBuilder;
   }

   createForm(): FormGroup {
      return this.formBuilder.group({
         nome: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z_ ]*$'), Validators.maxLength(35)])],
         email: ['', [Validators.required, Validators.email]],
         password: ['', [Validators.required, Validators.minLength(8)]],
         confirmPassword: ['', Validators.required]
      });
   }
}
