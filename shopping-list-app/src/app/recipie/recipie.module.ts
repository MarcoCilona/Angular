import { NgModule } from '@angular/core';
import { CommonModule } from '../common/commonModule.module';

import { RecipieComponent } from './recipie.component';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { RecipieItemComponent } from './recipie-list/recipie-item/recipie-item.component';
import { RecipieService } from './recipie.service';


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
    ],
    providers: [
        RecipieService
    ]
})

export class RecipieModule {

}
