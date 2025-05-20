import { Component, OnInit } from '@angular/core';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { StackComponent } from '../../components/stack/stack.component';
import { StudiesComponent } from '../../components/studies/studies.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    StackComponent,
    ProjectsComponent,
    ExperiencesComponent,
    StudiesComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  // posts: any[] = [];
  // constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.apiService.getData().subscribe(response => {
    //   this.posts = response;
    //   console.log(this.posts);;
    // });
  }
}
