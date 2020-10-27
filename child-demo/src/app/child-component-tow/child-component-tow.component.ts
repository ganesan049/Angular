import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child-component-tow',
  templateUrl: './child-component-tow.component.html',
  styleUrls: ['./child-component-tow.component.css'],
})
export class ChildComponentTowComponent implements OnChanges {
  @Input('loggedInStatus') loggedIn: Boolean;
  message: string;
  name:string = "gans"

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const loggedInValue = changes.loggedIn;
    if (loggedInValue.currentValue === true) {
      this.message = 'Welcome Back Gans';
    } else {
      this.message = 'Pls login to cont...';
    }
  }

  greetUser(){
    alert(`hello ${name}`)
  }
}
