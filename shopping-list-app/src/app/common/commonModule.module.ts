import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DropDownDirective } from './drop-down.directive';

@NgModule({
    declarations: [
        DropDownDirective
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        BrowserModule,
        FormsModule,
        DropDownDirective
    ]
})

export class CommonModule {

}
