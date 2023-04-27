import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedefinirPage } from './redefinir.page';

const routes: Routes = [
  {
    path: '',
    component: RedefinirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedefinirPageRoutingModule {}
