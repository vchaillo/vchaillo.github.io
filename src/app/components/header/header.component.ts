import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    ResumeComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('mainTitle') mainTitle!: ElementRef;
  @ViewChild('headerTitle') headerTitle!: ElementRef;

  ngAfterViewInit() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {

    const scrollToTopLink = document.querySelector('.scroll-to-top-link');

    if (window.scrollY > 50) {
      scrollToTopLink?.classList.add('shrink');
    } else {
      scrollToTopLink?.classList.remove('shrink');
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}


