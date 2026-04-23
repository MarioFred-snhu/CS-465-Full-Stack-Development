import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css'
})
export class AddTripComponent {
  @Output() add = new EventEmitter<any>();

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

  submitTrip(): void {
    this.add.emit({ ...this.newTrip });

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
  }
}