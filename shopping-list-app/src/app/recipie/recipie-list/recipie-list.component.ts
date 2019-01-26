import { Component, OnInit } from '@angular/core';
import { Identifiers } from '@angular/compiler';

export const ID = 'recipieList';

@Component({
  selector: ID,
  templateUrl: './recipie-list.component.pug',
  styleUrls: ['./recipie-list.component.sass']
})
export class RecipieListComponent implements OnInit {

  public componentName: string = ID;

  constructor() { }

  ngOnInit() {
  }

}
