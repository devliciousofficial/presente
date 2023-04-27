import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailRedefinicaoPage } from './email-redefinicao.page';

const routes: Routes = [
  {
    path: '',
    component: EmailRedefinicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailRedefinicaoPageRoutingModule {}
