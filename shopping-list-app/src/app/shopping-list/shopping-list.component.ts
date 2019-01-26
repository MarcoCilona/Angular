import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../common/objects.model';

export const ID = 'ShoppingList';

@Component({
  selector: ID,
  templateUrl: './shopping-list.component.pug',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] = [];

  constructor() { }

  ngOnInit() {
  }

}
