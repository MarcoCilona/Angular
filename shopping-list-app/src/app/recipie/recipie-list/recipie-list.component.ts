import { Component, OnInit } from '@angular/core';
import { Recipie } from 'src/app/common/objects.model';

export const ID = 'recipieList';

@Component({
  selector: ID,
  templateUrl: './recipie-list.component.pug',
  styleUrls: ['./recipie-list.component.sass']
})
export class RecipieListComponent implements OnInit {

  public componentName: string = ID;

  recipes: Recipie[] = [
    new Recipie('Test Recipie', 'Simple a test', '#')
  ];

  constructor() { }

  ngOnInit() {
  }

}
