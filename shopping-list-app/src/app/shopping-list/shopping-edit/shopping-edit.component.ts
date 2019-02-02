import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/common/objects.model';

export const ID = 'shoppingListEdit';

@Component({
  selector: ID,
  templateUrl: './shopping-edit.component.pug',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  public ingredientName: string;
  public ingredientAmount: number;

  constructor() { }

  ngOnInit() {
  }

  createNewIngredient() {

    const tmpIngredient: Ingredient = new Ingredient(this.ingredientName, this.ingredientAmount);
    this.ingredient.emit(tmpIngredient);

  }

}
