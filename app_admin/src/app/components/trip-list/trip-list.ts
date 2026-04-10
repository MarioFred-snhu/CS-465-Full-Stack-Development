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
  isLoggedIn = false;

  loginData = {
    email: '',
    password: ''
  };

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
        console.log('Trips loaded:', data);
        this.trips = Array.isArray(data) ? [...data] : [];
        console.log('Trips stored:', this.trips);
        this.cdr.detectChanges();
      },
      error: (err: any) => {
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