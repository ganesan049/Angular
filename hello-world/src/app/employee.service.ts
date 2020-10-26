import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url: string = '/assets/data/employe.json';

  constructor(private http: HttpClient) {
    console.log(this.http.get(this._url));
  }

  // public employees = [
  //   { id: 1, name: 'gans', age: 22 },
  //   { id: 2, name: 'gans', age: 23 },
  //   { id: 3, name: 'gans', age: 24 },
  //   { id: 4, name: 'gans', age: 25 },
  // ];
  // getEmployee = () => this.employees;

  getEmployee(): Observable<IEmployee[]> {
    console.log(this.http.get<IEmployee[]>(this._url));
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
}
