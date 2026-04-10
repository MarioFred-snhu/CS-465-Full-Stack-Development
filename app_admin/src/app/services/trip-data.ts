import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiURL = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  getTrip(tripCode: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${tripCode}`);
  }

  addTrip(trip: any): Observable<any> {
    return this.http.post<any>(this.apiURL, trip);
  }

  updateTrip(tripCode: string, trip: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/${tripCode}`, trip);
  }

  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${tripCode}`);
  }
}