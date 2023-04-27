import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import Parse from 'parse';
import { environment } from '../../../environments/environment';

@Component({
   selector: 'app-pedidos',
   templateUrl: 'pedidos.page.html',
   styleUrls: ['pedidos.page.scss']
})
export class PedidosPage {

   data: any;
   pedidos: any;

   constructor(private router: Router) {
      Parse.initialize(environment.APP_ID, environment.JS_KEY);
      Parse.serverURL = 'https://parseapi.back4app.com';

      (async () => {
         const pedido = Parse.Object.extend('Pedido');
         const query = new Parse.Query(pedido);
         query.select('qtd_produto', 'produtos', 'id_pagamento', 'loja_pedido');
         query.include('produtos', 'id_pagamento', 'loja_pedido');
         // You can also query by using a parameter of an object
         // query.equalTo('objectId', 'xKue915KBG');
         try {
            const listaPedidos = [];
            const results = await query.find();
            for (const object of results) {
               // Access the Parse Object attributes using the .GET method
               const logoMarca = object.get('loja_pedido').get('logo').url()
               const nomeLoja = object.get('loja_pedido').get('nome_loja');
               const idPedido = object.id.toUpperCase();
               const qtdProduto = object.get('qtd_produto');
               const produtos = object.get('produtos').get('nome_produto');
               const preco = object.get('produtos').get('preco');
               const user = object.get('user');

               listaPedidos.push({
                  logo: logoMarca,
                  loja: nomeLoja,
                  numeroPedido: idPedido,
                  quantidade: qtdProduto,
                  total: preco,
                  produto: produtos,
                  userName: user,
               });

               this.pedidos = listaPedidos;

            }
         } catch (error) {
            console.error('Error while fetching Pedido', error);
         }
      })();
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
