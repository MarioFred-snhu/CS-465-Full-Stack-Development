import { Component } from '@angular/core';
import { TripList } from './components/trip-list/trip-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripList],
  template: `<app-trip-list></app-trip-list>`
})
export class App {}