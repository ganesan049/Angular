import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss'],
})
export class ClassBindingComponent implements OnInit {
  public name = 'gans_bourne';
  public successClass = 'text-success';
  public hasError = true;
  public isSpeacial = true;

  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-speacial': this.isSpeacial,
  };

  constructor() {}

  ngOnInit(): void {}
}
