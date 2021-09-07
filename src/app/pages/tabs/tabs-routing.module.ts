import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: '', redirectTo: '/tabs/inicio', pathMatch: 'full' },
      { path: 'inicio', loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule) },
      { path: 'busca', loadChildren: () => import('../busca/busca.module').then(m => m.BuscaPageModule) },
      { path: 'pedidos', loadChildren: () => import('../pedidos/pedidos.module').then(m => m.PedidosPageModule) },
      { path: 'perfil', loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
