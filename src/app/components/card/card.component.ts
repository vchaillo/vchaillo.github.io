import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() text!: string;
  @Input() image?: string;

  getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}
