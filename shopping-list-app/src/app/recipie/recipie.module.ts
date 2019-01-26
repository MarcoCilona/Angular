import { NgModule } from '@angular/core';
import { CommonModule } from '../common/commonModule.module';

import { RecipieComponent } from './recipie.component';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { RecipieItemComponent } from './recipie-list/recipie-item/recipie-item.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        RecipieComponent,
        RecipieDetailComponent,
        RecipieListComponent,
        RecipieItemComponent
    ],
    exports: [
        RecipieComponent
    ],
    imports: [
        CommonModule
    ]
})

export class RecipieModule {

}
