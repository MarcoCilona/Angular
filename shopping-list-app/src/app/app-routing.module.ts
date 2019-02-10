import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipieComponent } from './recipie/recipie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipieDetailComponent } from './recipie/recipie-detail/recipie-detail.component';
import { DefaultDefaultRecipieDetailComponent } from './recipie/recipie-detail/default/default.component';
import { CreateRecipieComponent } from './recipie/create-recipie/create-recipie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipies',
    pathMatch: 'full'
  },
  {
    path: 'recipies',
    component: RecipieComponent,
    children: [
      {
        path: '',
        component: DefaultDefaultRecipieDetailComponent
      },
      {
        path: ':id/recipie',
        component: RecipieDetailComponent
      },
      {
        path: 'create-recipie',
        component: CreateRecipieComponent
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: '**',
    redirectTo: '/recipies'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
