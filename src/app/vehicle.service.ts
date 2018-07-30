import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export class Vehicle {
  constructor(public id: number, public name: string) {}
}

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) {

  }
  getVehicles() {
    return this.http.get('assets/vehicles.json').pipe(
      map((data: any) => <Vehicle[]> data.data),
      tap(data => console.log(data)),
      catchError(this.handleError)
    );

    // return [
    //   new Vehicle(1, 'X-Wing Fighter'),
    //   new Vehicle(2, 'B-Wing Fighter'),
    //   new Vehicle(3, 'Y-Wing Fighter')
    // ];
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return throwError(msg);
  }
}
