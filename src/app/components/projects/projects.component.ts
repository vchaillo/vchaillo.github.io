import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Les Fleuristes',
      url: 'https://les-fleuristes.fr',
      date: '2025',
      image: 'projects/les-fleuristes.png',
    },
    {
      name: 'Vélo Massif Morvan',
      url: 'https://velomassifmorvan.fr',
      date: '2013 - today',
      image: 'projects/velomassifmorvan.png',
    },
    {
      name: 'Life calendar',
      url: 'https://vchaillo.github.io/life-calendar',
      date: '2025',
      image: 'projects/life-calendar.png',
    },
    {
      name: 'MimXpressions',
      url: 'https://vchaillo.github.io/mimes',
      date: '2020',
      image: 'projects/mimes.png',
    },
    {
      name: 'Timelines',
      url: 'https://vchaillo.github.io/timelines',
      date: '2025',
      image: 'projects/timelines.png',
    },
    {
      name: 'Geekzie',
      url: 'https://geekzie.fr',
      date: '2015 - 2018',
      image: 'projects/geekzie.png',

    },

  ]
}
