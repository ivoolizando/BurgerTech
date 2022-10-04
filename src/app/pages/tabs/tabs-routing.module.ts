import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
    
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('../pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: '',
    redirectTo:'/tabs/home',
    pathMatch:'full'
  }

]},
{
  path:'',
  redirectTo:'/tabs/home',
  pathMatch:'full'
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
