import { Component, OnInit } from '@angular/core';
import { trips } from '../data/trips';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css']
})
export default class TripListing implements OnInit {
  trips: Array<any> = trips;

  constructor() {}

  ngOnInit(): void {}
}
