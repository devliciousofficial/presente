import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PedidosPage } from './pedidos.page';

import { PedidosPageRoutingModule } from './pedidos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PedidosPage }]),
    PedidosPageRoutingModule,
  ],
  declarations: [PedidosPage]
})
export class PedidosPageModule {}
