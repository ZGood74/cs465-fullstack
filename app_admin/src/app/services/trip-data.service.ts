import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root',
})
export class TripDataService {
  private readonly url = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  /**
   * Get all trips from the backend API.
   */
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url).pipe(
      tap((data) => console.log('Fetched Trips:', data)),
      catchError(this.handleError)
    );
  }

  /**
   * Add a new trip to the backend.
   * @param formData - Data for the new trip.
   */
  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, formData).pipe(
      tap((data) => console.log('Trip added:', data)),
      catchError(this.handleError)
    );
  }

  /**
   * Get a single trip by code.
   * @param tripCode - Unique code of the trip.
   */
  getTrip(tripCode: string): Observable<Trip> {
    const endpoint = `${this.url}/${tripCode}`;
    return this.http.get<Trip>(endpoint).pipe(
      tap((data) => console.log(`Fetched trip ${tripCode}:`, data)),
      catchError(this.handleError)
    );
  }

  /**
   * Update an existing trip.
   * @param formData - Updated trip data.
   */
  updateTrip(formData: Trip): Observable<Trip> {
    const endpoint = `${this.url}/${formData.code}`;
    return this.http.put<Trip>(endpoint, formData).pipe(
      tap((data) => console.log(`Trip updated (${formData.code}):`, data)),
      catchError(this.handleError)
    );
  }

  /**
   * Handle HTTP errors gracefully.
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('API Error:', error);
    const message =
      error.error instanceof ErrorEvent
        ? `Client error: ${error.error.message}`
        : `Server error: ${error.status}, ${error.message}`;
    return throwError(() => new Error(message));
  }
}
