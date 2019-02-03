import { Component, OnInit } from '@angular/core';
import { Recipie } from '../common/objects.model';
import { RecipieService } from './recipie.service';

export const ID = 'recipie';

@Component ({
    selector: ID,
    templateUrl: './recipie.pug'
})

export class RecipieComponent implements OnInit {

    public recipie: Recipie;

    constructor(private recipieService: RecipieService) {
    }

    ngOnInit() {
        this.recipieService.selectedRecipie.subscribe((recipie: Recipie) => {
            this.recipie = recipie;
        });
    }

}
