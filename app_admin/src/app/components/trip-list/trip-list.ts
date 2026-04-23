import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripDataService } from '../../services/trip-data';
import { TripCardComponent } from '../trip-card/trip-card';
import { AddTripComponent } from '../add-trip/add-trip';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TripCardComponent, AddTripComponent],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {
  trips: any[] = [];
  isLoggedIn = false;

  loginData = {
    email: '',
    password: ''
  };

  constructor(
    private tripService: TripDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('travlr-token');
    this.loadTrips();
  }

  login(): void {
    this.tripService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (res: any) => {
        localStorage.setItem('travlr-token', res.token);
        this.isLoggedIn = true;
        alert('Login successful');
      },
      error: (err: any) => {
        console.error('Login error:', err);
        alert('Login failed');
      }
    });
  }

  logout(): void {
    localStorage.removeItem('travlr-token');
    this.isLoggedIn = false;
  }

  loadTrips(): void {
    this.tripService.getTrips().subscribe({
      next: (data: any) => {
        this.trips = Array.isArray(data) ? [...data] : [];
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Trip load error:', err);
        this.trips = [];
        this.cdr.detectChanges();
      }
    });
  }

  addTrip(newTrip: any): void {
    if (
      !newTrip.tripCode ||
      !newTrip.name ||
      !newTrip.length ||
      !newTrip.start ||
      !newTrip.resort ||
      !newTrip.perPerson ||
      !newTrip.description
    ) {
      alert('All required fields must be completed.');
      return;
    }

    this.tripService.addTrip(newTrip).subscribe({
      next: () => this.loadTrips(),
      error: (err: any) => {
        console.error('Add trip error:', err);
        if (err.status === 401) {
          alert('You must be logged in.');
        } else {
          alert('Missing or invalid fields.');
        }
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
      error: (err: any) => {
        console.error('Update trip error:', err);
        if (err.status === 401) {
          alert('You must be logged in.');
        } else {
          alert('Update failed.');
        }
      }
    });
  }

  deleteTrip(tripCode: string): void {
    if (!confirm('Are you sure you want to delete this trip?')) {
      return;
    }

    this.tripService.deleteTrip(tripCode).subscribe({
      next: () => this.loadTrips(),
      error: (err: any) => {
        console.error('Delete trip error:', err);
        if (err.status === 401) {
          alert('You must be logged in.');
        } else {
          alert('Delete failed.');
        }
      }
    });
  }
}