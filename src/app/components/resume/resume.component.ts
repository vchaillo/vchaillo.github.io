import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  resumeIsOpen = true;

  ngOnInit() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  toggleResume() {
    this.resumeIsOpen = !this.resumeIsOpen;
  }

  closeResume() {
    this.resumeIsOpen = false;
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
