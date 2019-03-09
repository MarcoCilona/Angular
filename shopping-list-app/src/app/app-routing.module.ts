import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipieComponent } from './recipie/recipie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipieDetailComponent } from './recipie/recipie-detail/recipie-detail.component';
import { DefaultRecipieDetailComponent } from './recipie/recipie-detail/default/default.component';
import { RecipieEditComponent } from './recipie/recipie-edit/recipie-edit.component';

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
        component: DefaultRecipieDetailComponent
      },
      {
        path: 'new',
        component: RecipieComponent
      },
      {
        path: ':id/edit',
        component: RecipieEditComponent
      },
      {
        path: ':id/recipie',
        component: RecipieDetailComponent
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
