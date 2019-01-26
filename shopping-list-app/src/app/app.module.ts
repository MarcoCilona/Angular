import { NgModule } from '@angular/core';
import { CommonModule } from './common/commonModule.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipieModule } from './recipie/recipie.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RecipieModule,
    ShoppingListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
