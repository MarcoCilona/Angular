import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public showRecipies: boolean;
  public showShoppingList: boolean;

  constructor() {}

  ngOnInit() {
    this.showRecipies = true;
    this.showShoppingList = false;
  }

}
