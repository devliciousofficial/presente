import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule) },
  { path: 'alterar-senha', loadChildren: () => import('./alterar-senha/alterar-senha.module').then( m => m.AlterarSenhaPageModule) },
  {
    path: 'loader',
    loadChildren: () => import('./loader/loader.module').then( m => m.LoaderPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
