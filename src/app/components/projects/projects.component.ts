import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Project } from '../../models/project';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CardComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Les Fleuristes',
      url: 'https://les-fleuristes.fr',
      date: '2025',
    },
    {
      name: 'Vélo Massif Morvan',
      url: 'https://velomassifmorvan.fr',
      date: '2013 à aujourd\'hui',
    },
    {
      name: 'Geekzie',
      url: 'https://geekzie.fr',
      date: '2013',
    },
    {
      name: 'MimXpressions',
      url: 'https://vchaillo.github.io/mimes',
      date: '2020',
    },
    {
      name: 'Life calendar',
      url: 'https://vchaillo.github.io/life-calendar',
      date: '2025',
    },
  ]
}
