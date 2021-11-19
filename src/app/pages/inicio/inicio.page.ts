import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage {
   @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

   image = 'https://parsefiles.back4app.com/3auUTevR9wvgsYWt0BqYoQUHQV8Uz634k48WGhIk/52f81bd8776f4023805fefc18b7835ff_logo1.jpg';
   lojas: any = [];
   lojasPage: any = [];

   private readonly offset: number = 12;
   private index = 0;

   constructor() {
      // dummie data //
      for (let i = 0; i < 50; i++) {
         this.lojas.push(`Item ${i + 1}`);
      }

      this.lojasPage = this.lojas.slice(this.index, this.offset + this.index);
      this.index += this.offset;

   }

   loadData(event) {
     setTimeout(() => {
       const lojas = this.lojas.slice(this.index, this.offset + this.index);
       this.index += this.offset;

       // eslint-disable-next-line @typescript-eslint/prefer-for-of
       for (let i = 0; i < lojas.length; i++) {
         this.lojasPage.push(lojas[i]);
      }

      event.target.complete();

       // App logic to determine if all data is loaded
       // and disable the infinite scroll
      //  const data = '1234567891011';
       if (this.lojasPage.length === 50) {
         event.target.disabled = true;
       }
     }, 500);
   }
 }


