import { Component, OnInit } from '@angular/core';

export const ID = 'recipieDetail';

@Component({
  selector: ID,
  templateUrl: './recipie-detail.component.pug',
  styleUrls: ['./recipie-detail.component.scss']
})
export class RecipieDetailComponent implements OnInit {

  public componentName = ID;

  constructor() { }

  ngOnInit() {
  }

}
