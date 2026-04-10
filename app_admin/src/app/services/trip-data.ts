import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('travlr-token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token || ''}`
      })
    };
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, { email, password });
  }

  getTrips(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/trips`);
  }

  addTrip(trip: any): Observable<any> {
    return this.http.post(`${this.apiURL}/trips`, trip, this.getAuthHeaders());
  }

  updateTrip(tripCode: string, trip: any): Observable<any> {
    return this.http.put(`${this.apiURL}/trips/${tripCode}`, trip, this.getAuthHeaders());
  }

  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/trips/${tripCode}`, this.getAuthHeaders());
  }
}