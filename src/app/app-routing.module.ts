import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inscricao', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
  { path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule) },
  { path: 'alterar-senha', loadChildren: () => import('./pages/alterar-senha/alterar-senha.module').then( m => m.AlterarSenhaPageModule) },
  {
    path: 'inscricao',
    loadChildren: () => import('./pages/inscricao/inscricao.module').then( m => m.InscricaoPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
