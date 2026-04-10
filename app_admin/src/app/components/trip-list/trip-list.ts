import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripDataService } from '../../services/trip-data';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {
  trips: any[] = [];

  newTrip: any = {
    tripCode: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  constructor(
    private tripService: TripDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripService.getTrips().subscribe({
      next: (data) => {
        console.log('Trips loaded:', data);
        this.trips = Array.isArray(data) ? [...data] : [];
        console.log('Trips stored:', this.trips);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Trip load error:', err);
        this.trips = [];
        this.cdr.detectChanges();
      }
    });
  }

  addTrip(): void {
    if (!this.newTrip.tripCode || !this.newTrip.name) {
      alert('Trip code and name are required.');
      return;
    }

    this.tripService.addTrip(this.newTrip).subscribe({
      next: () => {
        this.loadTrips();
        this.newTrip = {
          tripCode: '',
          name: '',
          length: '',
          start: '',
          resort: '',
          perPerson: '',
          image: '',
          description: ''
        };
      },
      error: (err) => {
        console.error('Add trip error:', err);
      }
    });
  }

  editTrip(trip: any): void {
    const updatedName = prompt('Edit trip name:', trip.name);
    if (updatedName === null) return;

    const updatedLength = prompt('Edit trip length:', trip.length);
    if (updatedLength === null) return;

    const updatedPrice = prompt('Edit price per person:', trip.perPerson);
    if (updatedPrice === null) return;

    const updatedTrip = {
      ...trip,
      name: updatedName,
      length: updatedLength,
      perPerson: updatedPrice
    };

    this.tripService.updateTrip(trip.tripCode, updatedTrip).subscribe({
      next: () => this.loadTrips(),
      error: (err) => console.error('Update trip error:', err)
    });
  }

  deleteTrip(tripCode: string): void {
    this.tripService.deleteTrip(tripCode).subscribe({
      next: () => this.loadTrips(),
      error: (err) => console.error('Delete trip error:', err)
    });
  }
}