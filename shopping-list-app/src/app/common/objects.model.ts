import * as _ from 'lodash';

export class Recipie {

    public id?: number;
    public name: string;
    public description: string;
    public imgPath: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imgPath: string, ingredients: Ingredient[]) {
        this.id = _.random(0, 100);
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
        this.ingredients = ingredients;
    }

}

export class Ingredient {

    public id: number;
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.id = _.random(0, 100);
        this.name = name;
        this.amount = amount;
    }

}
