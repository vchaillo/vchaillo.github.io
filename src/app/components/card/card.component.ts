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
  @Input() url!: string;
  @Input() image?: string;

  cardIsOpen: boolean = false;

  openCard(): void {
    this.cardIsOpen = !this.cardIsOpen;
  }
}
