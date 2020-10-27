import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input('childValue') loggedIn: Boolean = true;
  private _loggedIn;

  public message: string;
  // where get and set are the props passed from the parent component
  @Input()
  get loggedInStatus() {
    return this._loggedIn;
  }
  set loggedInStatus(value: Boolean) {
    console.log(value);
    this._loggedIn = value;
    if (value) {
      this.message = 'Welcome Back gans';
    } else {
      this.message = 'Plese login as user';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
