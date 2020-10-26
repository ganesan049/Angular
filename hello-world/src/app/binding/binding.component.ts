import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  public name = "gans_bourne"
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "i'm from the greetuser function "
  }

}
