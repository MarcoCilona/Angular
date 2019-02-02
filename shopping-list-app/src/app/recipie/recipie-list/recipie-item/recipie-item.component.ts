import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from 'src/app/common/objects.model';

export const ID = 'recipieItem';

@Component({
  selector: ID,
  templateUrl: './recipie-item.component.pug',
  styleUrls: ['./recipie-item.component.sass']
})
export class RecipieItemComponent implements OnInit {

  @Input() recipie: Recipie;

  public n: Recipie;

  constructor() { }

  ngOnInit() {}

}
