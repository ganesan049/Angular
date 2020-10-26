import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-lit',
  template: `
    <p>
      department-lit works!
    </p>
    <ul *ngFor="let department of departments">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)">id - {{department.id}} and name - {{department.name}}</li>
    </ul>
  `,
  styles: [

  ]
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {id:1,name:"Angular"},
    {id:2,name:"React"},
    {id:3,name:"Webpack"},
    {id:4,name:"Nodejs"},
    {id:5,name:"Express"},
  ]



  constructor(private _router:Router, private _route:ActivatedRoute) { }

  public onSelect(department){
      this._router.navigate(['/department',department.id])
  }
  public selectedId;

  ngOnInit(): void {
  this._route.paramMap.subscribe((params:ParamMap) => {
    console.log(params)
    let id = parseInt(params.get("id"))
    this.selectedId = id;
    })
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
