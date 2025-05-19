import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent implements OnInit {
  // @Input() project!: Project;
  project!: Project;

  ngOnInit(): void {
    this.project = new Project('Placeholder', 'https://url.com', '2000 à 2025');
  }
}
