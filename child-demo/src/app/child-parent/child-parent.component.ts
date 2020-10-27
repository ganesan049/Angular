import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent implements OnInit {

  @Output() greetEvent = new EventEmitter();
  name = "from child emitter"

  constructor() { }

  ngOnInit(): void {
  }

  callParent(){
    alert("sending msg")
    this.greetEvent.emit(this.name);
  }

}
