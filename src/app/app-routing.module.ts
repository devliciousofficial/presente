/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inscricao', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
  { path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule) },
  { path: 'redefinir', loadChildren: () => import('./pages/redefinir/redefinir.module').then( m => m.RedefinirPageModule) },
  { path: 'inscricao', loadChildren: () => import('./pages/inscricao/inscricao.module').then( m => m.InscricaoPageModule) },
  { path: 'redefinir', loadChildren: () => import('./pages/redefinir/redefinir.module').then( m => m.RedefinirPageModule) },
  { path: 'email-redefinicao', loadChildren: () => import('./pages/email-redefinicao/email-redefinicao.module').then( m => m.EmailRedefinicaoPageModule) },
  { path: 'email-enviado', loadChildren: () => import('./pages/email-enviado/email-enviado.module').then( m => m.EmailEnviadoPageModule) },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
