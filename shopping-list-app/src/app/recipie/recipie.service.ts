import { Recipie, Ingredient } from '../common/objects.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipieService {

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipie[] = [
        new Recipie('Test Recipie', 'Simple a test', '#', [new Ingredient('Meat', 200)]),
        new Recipie('Test Recipie2', 'Simple a test', '#', [new Ingredient('Fries', 10)])
    ];

    selectedRecipie: EventEmitter<Recipie> = new EventEmitter<Recipie>();

    getRecipies () {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList (ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}
