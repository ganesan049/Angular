import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  // selector: '.app-test',
  selector: '[app-test]',
  template: `
  <div>hellow world from test component</div>
  `,
  styles: [`
  div{
    color:blue;
  }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
