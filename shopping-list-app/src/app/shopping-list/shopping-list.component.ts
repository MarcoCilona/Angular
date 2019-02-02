import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../common/objects.model';

export const ID = 'shoppingList';

@Component({
  selector: ID,
  templateUrl: './shopping-list.component.pug',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 5),
    new Ingredient('Potato', 3)
  ];

  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
