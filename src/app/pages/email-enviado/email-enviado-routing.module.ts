import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailEnviadoPage } from './email-enviado.page';

const routes: Routes = [
  {
    path: '',
    component: EmailEnviadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailEnviadoPageRoutingModule {}
