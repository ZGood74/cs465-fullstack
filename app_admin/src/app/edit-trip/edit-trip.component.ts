import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrls: []
})
export class EditTripComponent implements OnInit {
  editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  submissionError: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    const tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("No trip code found.");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [''],
      code: [tripCode, [Validators.required, Validators.pattern('^[A-Z]{3}[0-9]{3}$')]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      length: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      image: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.tripDataService.getTrip(tripCode).subscribe({
      next: (trip: Trip) => {
        this.trip = trip;
        this.editForm.patchValue(trip);
      },
      error: (error) => {
        console.error('Error loading trip:', error);
        this.submissionError = 'Failed to load trip details. Please try again later.';
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.submissionError = null;

    if (this.editForm.invalid) {
      return;
    }

    const updatedTrip: Trip = this.editForm.value;

    this.tripDataService.updateTrip(updatedTrip).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (error) => {
        console.error('Error updating trip:', error);
        this.submissionError = 'Failed to update trip. Please try again.';
      }
    });
  }

  get f() {
    return this.editForm.controls;
  }
}
