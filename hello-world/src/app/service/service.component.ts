import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private _employeeSevice: EmployeeService) {}

  ngOnInit(): void {
    // this.employees = this._employeeSevice.getEmployee();

    // this.service.function
    //   .subscribe(arg => this.property = arg);
    this._employeeSevice.getEmployee().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error)
    );
  }
}
