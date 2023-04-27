import { Component, ViewChild, AfterContentChecked } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import Parse from 'parse';
import { environment } from '../../../environments/environment';
@Component({
   selector: 'app-busca',
   templateUrl: 'busca.page.html',
   styleUrls: ['busca.page.scss']
})
export class BuscaPage {
   @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

   data: any;
   produtos: any;
   busca: string;

   constructor() {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';

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
               const imagemURL = imagem.url();

               array.push({
                  imagem: imagemURL,
                  nome: nomeProduto,
                  descricao: descricaoProduto,
                  preco: precoProduto,
               });

               this.produtos = array;
            }

         } catch (error) {
            console.error('Error while fetching Produto', error);
         }
      })();
   }

   loadData(event): void {
      setTimeout(() => {
         // App logic to determine if all data is loaded
         // and disable the infinite scroll
         if (this.data.length === 10) {
            event.target.disabled = true;
         }
      }, 500);
   }
   categoriaOuro(){this.busca = 'Ouro';}
   categoriaPrata(){this.busca = 'Prata';}
   categoriaBronze(){this.busca = 'Bronze';}
   categoriaDiamante(){this.busca = 'Diamante';}
}
