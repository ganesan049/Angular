import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss'],
})
export class ComponentInteractionComponent implements OnInit {
  // @Input() public parentData;
  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  fireEvent() {
    this.childEvent.emit('hey this is from the child component');
  }
}
