import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-stack',
  standalone: true,
  imports: [],
  templateUrl: './project-stack.component.html',
  styleUrl: './project-stack.component.scss'
})
export class ProjectStackComponent {
  @Input() stack!: string[];
}
