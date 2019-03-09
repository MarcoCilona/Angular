import { Component, OnInit } from '@angular/core';
import { Recipie } from '../../common/objects.model';
import { RecipieService } from '../recipie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

export const ID = 'recipieDetail';

@Component({
  selector: ID,
  templateUrl: './recipie-detail.component.pug',
  styleUrls: ['./recipie-detail.component.scss']
})
export class RecipieDetailComponent implements OnInit {

  public componentName = ID;

  public recipie: Recipie;
  private recipieId: number;

  constructor(private recipieService: RecipieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.recipieId = +params['id'];
      this.recipie = this.recipieService.getRecipie(this.recipieId);
    });

    if (this.recipie === undefined) {
      this.router.navigate([''], {relativeTo: this.route});
    }

  }

  onAddIngredientsToShoppingList() {
    this.recipieService.addIngredientsToShoppingList(this.recipie.ingredients);
  }

}
