import { Component, OnInit, Input } from '@angular/core';
import { Recipie, Ingredient } from '../../common/objects.model';
import { RecipieService } from '../recipie.service';

export const ID = 'recipieDetail';

@Component({
  selector: ID,
  templateUrl: './recipie-detail.component.pug',
  styleUrls: ['./recipie-detail.component.scss']
})
export class RecipieDetailComponent implements OnInit {

  public componentName = ID;

  // tslint:disable-next-line:no-input-rename
  @Input('selectedRecipie') recipie: Recipie;

  constructor(private recipieService: RecipieService) { }

  ngOnInit() {
  }

  onAddIngredientsToShoppingList() {
    this.recipieService.addIngredientsToShoppingList(this.recipie.ingredients);
  }

}
