import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
  @Input() percentage = 70;
  @Input() numFlags = 4;
  colour = 'text-warning';
  heading = "This company has been flagged as very unsafe";


  constructor() {
    this.getColorClass()
  }

  getColorClass() {
    if (this.percentage >= 80) {
      this.colour = 'text-error';
      this.heading = 'This company has been flagged as very unsafe';
    } else if (this.percentage >= 60) {
      this.colour = 'text-warning';
      this.heading = 'This company has been flagged as possbily unsafe';
    } else {
      this.colour = 'warning';
      this.heading = 'This company has been flagged as possbily unsafe';
    }
  }
}