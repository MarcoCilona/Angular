import { Component, Output, EventEmitter } from '@angular/core';

export const ID = 'header';

@Component({
    selector: ID,
    templateUrl: './header.pug',
    styleUrls: ['./header.scss']
})

export class HeaderComponent {

    @Output() tabSelected: EventEmitter<string> = new EventEmitter<string>();

    onSelect(tab: string) {
        this.tabSelected.emit(tab);
    }

}
