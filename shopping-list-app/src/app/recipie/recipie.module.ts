import { NgModule } from '@angular/core';
import { RecipieComponent } from './recipie.component';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';

@NgModule({
    declarations: [
        RecipieComponent,
        RecipieDetailComponent,
        RecipieListComponent
    ],
    exports: [
        RecipieComponent
    ]

})

export class RecipieModule {

}
