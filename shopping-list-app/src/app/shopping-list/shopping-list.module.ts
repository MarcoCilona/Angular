import { NgModule } from '@angular/core';
import { CommonModule } from '../common/commonModule.module';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingListService } from './shopping-list.service';


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    exports: [
        ShoppingListComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        ShoppingListService
    ]
})

export class ShoppingListModule {

}
