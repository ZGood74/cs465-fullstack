import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Trip } from '../models/trip';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trip-card.component.html',
  styleUrls: []
})
export class TripCardComponent {
  @Input() trip!: Trip;

  constructor(private router: Router, private authService: AuthService) {}

  editTrip(): void {
    localStorage.setItem('tripCode', this.trip.code);
    this.router.navigate(['/edit-trip']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
