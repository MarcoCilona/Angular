import { Component } from '@angular/core';
import { Recipie } from '../common/objects.model';

export const ID = 'recipie';

@Component ({
    selector: ID,
    templateUrl: './recipie.pug'
})

export class RecipieComponent {

    public recipie: Recipie;

    showRecipieDetail(recipie: Recipie) {
        this.recipie = recipie;
    }

}
