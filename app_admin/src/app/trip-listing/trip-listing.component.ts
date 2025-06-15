import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDataService } from '../services/trip-data.service'; // import service
import TripCard from '../trip-card/trip-card.component';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];

  constructor(
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    this.getTrips();
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private getTrips(): void {
    this.tripDataService.getTrips().subscribe({
      next: (data) => (this.trips = data),
      error: (err) => console.error('Failed to load trips:', err)
    });
  }
}
