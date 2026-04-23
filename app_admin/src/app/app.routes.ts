import { Routes } from '@angular/router';
import { TripList } from './components/trip-list/trip-list';
import { AddTripComponent } from './components/add-trip/add-trip';
import { EditTripComponent } from './components/edit-trip/edit-trip';

export const routes: Routes = [
  { path: '', component: TripList },
  { path: 'add', component: AddTripComponent },
  { path: 'edit/:tripCode', component: EditTripComponent }
];