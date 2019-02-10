import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DropDownDirective } from './drop-down.directive';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        DropDownDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    exports: [
        BrowserModule,
        FormsModule,
        DropDownDirective,
        AppRoutingModule
    ]
})

export class CommonModule {

}
