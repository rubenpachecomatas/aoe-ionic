import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NavPage } from './nav.page';

const routes: Routes = [
  {
    path: 'nav',
    component: NavPage,
    children: [
      {
        path: 'principal',
        loadChildren: '../principal/principal.module#PrincipalPageModule'
      },
      {
        path: 'modciv',
        loadChildren: '../modciv/modciv.module#ModcivPageModule'
      },
      {
        path: 'addciv',
        loadChildren: '../addciv/addciv.module#AddcivPageModule'
      },
      {
        path: 'user',
        loadChildren: '../user/user.module#UserPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/nav/principal'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NavPage]
})
export class NavPageModule {}
