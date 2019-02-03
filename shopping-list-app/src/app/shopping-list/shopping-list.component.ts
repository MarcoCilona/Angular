import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../common/objects.model';
import { ShoppingListService } from './shopping-list.service';

export const ID = 'shoppingList';

@Component({
  selector: ID,
  templateUrl: './shopping-list.component.pug',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.addIngredientEvent.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });

  }

}
