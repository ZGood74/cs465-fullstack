import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
  addForm!: FormGroup;
  submitted = false;
  submissionError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern('^[A-Z]{3}[0-9]{3}$')]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      length: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      image: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.addForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.submissionError = null;

    if (this.addForm.invalid) {
      return;
    }

    const tripData: Trip = this.addForm.value;

    this.tripService.addTrip(tripData).subscribe({
      next: () => this.router.navigate(['']),
      error: (err) => {
        console.error('Error adding trip:', err);
        this.submissionError = 'Failed to submit trip. Please try again later.';
      }
    });
  }
}
