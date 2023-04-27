import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioPage } from './inicio.page';

import { InicioPageRoutingModule } from './inicio-routing.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InicioPageRoutingModule,
    SwiperModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
