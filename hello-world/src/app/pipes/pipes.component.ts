import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public name = "CodeVolution"
  public message = "Welcome to CodeVolution"
  public date = new Date()
  public person = {
    "firstName":"gans",
    "lastName":"Bourne"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
