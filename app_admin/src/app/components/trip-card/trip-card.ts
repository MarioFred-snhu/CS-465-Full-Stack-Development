import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCardComponent {
  @Input() trip: any;
  @Output() edit = new EventEmitter<any>();
  @Output() remove = new EventEmitter<string>();

  onEdit(): void {
    this.edit.emit(this.trip);
  }

  onDelete(): void {
    this.remove.emit(this.trip.tripCode);
  }
}