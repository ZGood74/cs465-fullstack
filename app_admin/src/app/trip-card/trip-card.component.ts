import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // for built-in pipes like currency
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule], // enables pipes like | currency
  templateUrl: './trip-card.component.html',
  styleUrls: [] //  avoids missing .css error
})
export class TripCardComponent {
  @Input() trip!: Trip;

  constructor(private router: Router) {}

  editTrip(): void {
    localStorage.setItem("tripCode", this.trip.code);
    this.router.navigate(['/edit-trip']);
  }
}

// default export for use in trip-listing
export default TripCardComponent;
