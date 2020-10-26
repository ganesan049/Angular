import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>department-detail works!</p>
    <h3>You selected department with id = {{ departmentId }}</h3>
    <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click)="goPrevious()">Previous</button>&nbsp;
    <button (click)="goNext()">Next</button>
    </p>
    <div>
      <button (click)="goToDepartment()">Back</button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // console.log(this.route.snapshot);
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    console.log(previousId);
    this.router.navigate(['/department', previousId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department', nextId]);
  }
  goToDepartment(){
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(["/department",{id:selectedId}])
    this.router.navigate(["../",{id:selectedId}],{relativeTo:this.route})
  }
  showOverview(){
    this.router.navigate(["overview"],{relativeTo:this.route})
  }
  showContact(){
    this.router.navigate(["contact"],{relativeTo:this.route})
  }
}
