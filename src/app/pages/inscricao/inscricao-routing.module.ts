import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscricaoPage } from './inscricao.page';

const routes: Routes = [
  {
    path: '',
    component: InscricaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscricaoPageRoutingModule {}
