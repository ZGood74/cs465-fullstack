import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent, RouterModule],
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  loading: boolean = false;

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
    this.loading = true;
    this.tripDataService.getTrips().subscribe({
      next: (trips: Trip[]) => {
        this.trips = trips;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('[TripListingComponent] Failed to load trips:', err);
        this.loading = false;
      }
    });
  }
}
