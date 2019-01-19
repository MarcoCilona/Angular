import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.1.pug',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  name: string;
  greetingsMessage :string;

  constructor() { }
  
  ngOnInit() {
  }

  getGreetings() {
    this.greetingsMessage = "Hello " + this.name + "!";
  }

}
