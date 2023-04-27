import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscaPage } from './busca.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { BuscaPageRoutingModule } from './busca-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BuscaPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [BuscaPage]
})
export class BuscaPageModule {}
