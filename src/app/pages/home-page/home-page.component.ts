import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { Project } from '../../models/project';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) { }

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
      name: 'Portfolio',
      url: 'https://vchaillo.github.io/portfolio',
      date: '2025',
    },
    {
      name: 'Life calendar',
      url: 'https://vchaillo.github.io/life-calendar',
      date: '2025',
    },
  ]

  ngOnInit(): void {
    // Appel de l'API pour récupérer les données
    this.fetchData();
  }

  fetchData() {
    this.apiService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }
}
