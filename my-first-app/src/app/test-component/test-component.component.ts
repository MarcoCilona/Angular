import { Component, OnInit, SimpleChange, Input } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.pug',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  name: string;
  greetingsMessage: string;
  check: boolean;
  list: string[];

  constructor() { }

  ngOnInit() {
    this.check = true;
    this.list = ['One', 'Two', 'Three'];
  }

  getGreetings() {
    this.greetingsMessage = 'Hello ' + this.name + '!';
  }

}
