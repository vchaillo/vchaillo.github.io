import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  resumeIsOpen = false;

  ngOnInit() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  openResume() {
    this.resumeIsOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeResume() {
    const resumeElement = document.querySelector('.resume-image') as HTMLElement;

    if (resumeElement) {
      resumeElement.classList.add('animated-zoom-out');
      setTimeout(() => {
        resumeElement.classList.remove('animated-zoom-out');
        this.resumeIsOpen = false;
        document.body.style.overflow = 'auto';
      }, 200);
    }
  }

  handleKeydown = (event: KeyboardEvent) => {
    if (!this.resumeIsOpen) return;

    switch (event.key) {
      case 'Escape':
        this.closeResume();
        break;
    }
  };
}
