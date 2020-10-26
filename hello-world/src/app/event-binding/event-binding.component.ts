import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public greeting = ""

  onClick(event){
    this.greeting = "welcome to angular application"
    console.log(event)
  }

  logMessage(value){
    console.log(value)
    console.log(value.value)
  }

  public name=" ";
}
