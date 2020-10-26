import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  public employees = [];
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployee()
    this._employeeService.getEmployee()
    .subscribe(data => this.employees=data)
  }

}
