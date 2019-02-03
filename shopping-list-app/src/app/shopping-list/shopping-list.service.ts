import { Ingredient } from '../common/objects.model';
import { EventEmitter } from '@angular/core';
import * as _ from 'lodash';

export class ShoppingListService {

    addIngredientEvent: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Tomato', 5),
        new Ingredient('Potato', 3)
    ];

    getIngredients () {
        return this.ingredients.slice();
    }

    private sumDuplicates (ingredients: Ingredient []) {
        return _.map(_.groupBy(ingredients, _.property('name')), (ingredientsList: Ingredient[]) => {
            return new Ingredient(_.sample(ingredientsList).name,
            _.sumBy(ingredientsList, _.property('amount')));
    });
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredients = this.sumDuplicates(this.ingredients);
        this.addIngredientEvent.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[])  {
        this.ingredients = this.sumDuplicates(_.concat(this.ingredients, ingredients));
        this.addIngredientEvent.emit(this.ingredients.slice());
    }

}
