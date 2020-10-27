import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponentTowComponent } from './child-component-tow/child-component-tow.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'child-demo parent component';
  userLoggedIn=true;
  @ViewChild('child')childComponentRef:ChildComponentTowComponent;

  ngAfterViewInit(){
    this.childComponentRef.message = "hello"
  }
  greet(value){
    alert(value)
  }
}
