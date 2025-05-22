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
    // document.body.classList.add('no-scroll');
  }

  closeResume() {
    const resumeImageElement = document.querySelector('.resume-image') as HTMLElement;

    if (resumeImageElement) {

      resumeImageElement.classList.add('animated-zoom-out');
      setTimeout(() => {
        resumeImageElement.classList.remove('animated-zoom-out');
        this.resumeIsOpen = false;
        document.body.style.overflow = 'auto';
        // document.body.classList.remove('no-scroll');

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
