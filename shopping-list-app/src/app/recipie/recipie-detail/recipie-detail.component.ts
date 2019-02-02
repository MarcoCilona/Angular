import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../../common/objects.model';

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

  constructor() { }

  ngOnInit() {
  }

}
