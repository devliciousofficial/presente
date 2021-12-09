import { Component, ViewChild, AfterContentChecked } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

/*Import swiper modules and components */
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

/*Install/use Swiper modules */
SwiperCore.use([
   Pagination
]);

import Parse from 'parse';
import { environment } from '../../../environments/environment';

@Component({
   selector: 'app-inicio',
   templateUrl: 'inicio.page.html',
   styleUrls: ['inicio.page.scss']
})
export class InicioPage implements AfterContentChecked{
   @ViewChild('swiper') swiper: SwiperComponent;
   @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

   config: SwiperOptions = {
      pagination: true,
      navigation: false,
   };

   userName: string;
   data: any;
   produtos: any;

   constructor() {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';

      const queryUserName = // Retrieve current user data //
      (async () => {
         // Creates a new Query object to help us fetch user objects
         const currentUser = Parse.User.current();
         const userName = currentUser.get('username');
         const query = new Parse.Query('User');

         query.equalTo('username', userName);
         query.select('name');

         try {
           // Executes the query, which returns an array of CURRENT User data
           const results = await query.find();

           for (const object of results) {
					 const name = object.get('name');
                this.userName = name;
           }

         } catch (error) {
           console.log(`Error: ${(error)}`);
         }
       })();

      const queryProdutos = (async () => {
         const produto = Parse.Object.extend('Produto');
         const query = new Parse.Query(produto);
         query.select('nome_produto', 'preco', 'descricao', 'imagem');


         try {
            const array = [];
            const results = await query.find();
            this.data = results;

            for (const object of results) {
               // Access the Parse Object attributes using the .GET method
               const nomeProduto = object.get('nome_produto');
               const precoProduto = object.get('preco');
               const descricaoProduto = object.get('descricao');
               const imagem = object.get('imagem');
               const imagemURL= imagem.url();

               array.push({
                  imagem: imagemURL,
                  nome: nomeProduto,
                  descricao: descricaoProduto,
                  preco: precoProduto,
               });

            }

            this.produtos = array;

         } catch (error) {
            console.error('Error while fetching Produto', error);
         }
      })();
   }
   ngAfterContentChecked(){
      if (this.swiper) {
         this.swiper.updateSwiper({});
      };
   }

   loadData(event) {
      setTimeout(() => {
         // App logic to determine if all data is loaded
         // and disable the infinite scroll
         if (this.data.length === 10) {
            event.target.disabled = true;
         }
      }, 500);
   }
}


