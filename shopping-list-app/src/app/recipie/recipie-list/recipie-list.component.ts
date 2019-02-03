import { Component, OnInit } from '@angular/core';
import { Recipie } from 'src/app/common/objects.model';
import { RecipieService } from '../recipie.service';

export const ID = 'recipieList';

@Component({
  selector: ID,
  templateUrl: './recipie-list.component.pug',
  styleUrls: ['./recipie-list.component.sass']
})
export class RecipieListComponent implements OnInit {

  public componentName: string = ID;

  public recipies: Recipie[];

  constructor(private recipieService: RecipieService) { }

  ngOnInit() {
    this.recipies = this.recipieService.getRecipies();
  }

  selectRecipie(recipie: Recipie) {
    this.recipieService.selectedRecipie.emit(recipie);
  }

}
