import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipie } from 'src/app/common/objects.model';

export const ID = 'recipieList';

@Component({
  selector: ID,
  templateUrl: './recipie-list.component.pug',
  styleUrls: ['./recipie-list.component.sass']
})
export class RecipieListComponent implements OnInit {

  public componentName: string = ID;
  @Output() recipieDetail: EventEmitter<Recipie> = new EventEmitter<Recipie>();

  recipes: Recipie[] = [
    new Recipie('Test Recipie', 'Simple a test', '#'),
    new Recipie('Test Recipie2', 'Simple a test', '#')
  ];

  constructor() { }

  ngOnInit() {
  }

  selectRecipie(recipie: Recipie) {
    this.recipieDetail.emit(recipie);
  }

}
