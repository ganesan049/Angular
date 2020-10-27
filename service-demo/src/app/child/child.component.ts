import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _interactionSerivce:InteractionService) { }

  ngOnInit(): void {
    this._interactionSerivce.teacherMessage$.subscribe(message => alert(message))
  }

}
