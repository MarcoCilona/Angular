import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

export const ID = 'recipieEdit';

@Component({
    selector: ID,
    templateUrl: 'recipie-edit.pug'
})

export class RecipieEditComponent implements OnInit {

    id: number;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe( (params: Params) => {
            this.id = +params['id'];
        });
    }

}
