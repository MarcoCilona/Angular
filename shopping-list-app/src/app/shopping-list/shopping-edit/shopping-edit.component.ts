import { Component, OnInit} from '@angular/core';
import { Ingredient } from 'src/app/common/objects.model';
import { ShoppingListService } from '../shopping-list.service';

export const ID = 'shoppingListEdit';

@Component({
  selector: ID,
  templateUrl: './shopping-edit.component.pug',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  public ingredientName: string;
  public ingredientAmount: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  createNewIngredient() {

    const tmpIngredient: Ingredient = new Ingredient(this.ingredientName, this.ingredientAmount);
    this.shoppingListService.addIngredient(tmpIngredient);

  }

}
