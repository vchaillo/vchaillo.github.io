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
      description: 'Site vitrine présentant les produits et prestations d’une cliente fleuriste. Le site inclut une galerie de compositions ainsi que différents formulaires de contact pour la prise de rendez-vous.',
      stack: ['Angular', 'NodeJS', 'Express', 'Bulma'],
    },
    // {
    //   name: 'Timelines',
    //   url: 'https://vchaillo.github.io/timelines',
    //   date: '2025',
    //   image: 'projects/timelines.png',
    //   description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt adipisci quam exercitationem maiores rerum sint facilis eum sapiente ullam! Explicabo, minima? Quia, deserunt officiis. Ducimus et adipisci nisi iste!',
    //   stack: ['Angular', 'NodeJS', 'Express'],
    // },
    // {
    //   name: 'Life calendar',
    //   url: 'https://vchaillo.github.io/life-calendar',
    //   date: '2025',
    //   image: 'projects/life-calendar.png',
    //   description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt adipisci quam exercitationem maiores rerum sint facilis eum sapiente ullam! Explicabo, minima? Quia, deserunt officiis. Ducimus et adipisci nisi iste!',
    //   stack: ['Angular', 'NodeJS', 'Express'],
    // },
    // {
    //   name: 'MimXpressions',
    //   url: 'https://vchaillo.github.io/mimes',
    //   date: '2020',
    //   image: 'projects/mimes.png',
    //   description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt adipisci quam exercitationem maiores rerum sint facilis eum sapiente ullam! Explicabo, minima? Quia, deserunt officiis. Ducimus et adipisci nisi iste!',
    //   stack: ['Html', 'CSS', 'Javascript'],
    // },
    {
      name: 'Vélo Massif Morvan',
      url: 'https://velomassifmorvan.fr',
      date: '2016',
      image: 'projects/velomassifmorvan.png',
      description: 'Site pour une association organisant des randonnées VTT et des trails. Le site fournit les informations sur les événements et la région. Une interface administrateur permet la gestion autonome du contenu.',
      stack: ['Ruby', 'Ruby on Rails', 'Redis', 'Bootstrap', 'Heroku', 'MySQL',],
    },
    {
      name: 'Geekzie',
      url: 'https://geekzie.fr',
      date: '2015 - 2018',
      image: 'projects/geekzie.png',
      description: 'Plateforme de prise de rendez-vous entre clients et étudiants freelance. Le site propose un paiement en ligne, une interface administrateur et un espace étudiant pour gérer le calendrier et les rendez-vous.',
      stack: ['Ruby', 'Ruby on Rails', 'Redis', 'Bootstrap', 'MySQL', 'Stripe'],
    },
  ]

  entrance: 'down' | 'left' | 'right' = 'down';
  currentIndex: number | null = null;

  setCurrentIndex(index: number) {
    this.currentIndex = index;
    setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 200);
  }

  closeProject() {
    this.entrance = 'down';
    this.currentIndex = null;
    document.body.style.overflow = 'auto';
  }

  previousProject(index: number) {
    if (this.currentIndex !== null && this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.projects.length - 1;
    }

    this.entrance = 'left';
  }

  nextProject(index: number) {
    if (this.currentIndex !== null && this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }

    this.entrance = 'right';
  }
}
