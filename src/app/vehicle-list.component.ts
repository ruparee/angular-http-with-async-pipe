import { Component } from '@angular/core';
import { Vehicle, VehicleService } from './vehicle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styles: ['li {cursor: pointer;} .error {color:red;}']
})
export class VehicleListComponent {
  errorMessage: string;
  selectedVehicle: Vehicle;
  vehicles: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService) {}

  getVehicles(value?: string) {
    this.vehicles = this.vehicleService.getVehicles(value);
  }

  ngOnInit() {
    this.getVehicles();
  }

  select(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
  }
}
