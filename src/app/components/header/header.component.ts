import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ResumeComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
