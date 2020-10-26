import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {

  public titleStyles = {
    color:"red",
    fontStyle:"italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
