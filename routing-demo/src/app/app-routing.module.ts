import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-lit/department-lit.component';
import { EmployeeListComponent } from './employee-lit/employee-lit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  // the path which is matching before the empty will get to redirect
  // {path:"",redirectTo:"department",pathMatch:"prefix"},
  // the full path i.e.. localhost:4002/ will get redirect
  {path:"",redirectTo:"department",pathMatch:"full"},
  {path:"department",component:DepartmentListComponent},
  {path:"department/:id",component:DepartmentDetailComponent},
  {path:"employees",component:EmployeeListComponent},
  {path:"**",component:PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
