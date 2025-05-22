import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectStackComponent } from '../project-stack/project-stack.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectStackComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project;
  @Input() index!: number;
  @Input() isOpen!: boolean;
  @Input() entrance!: 'left' | 'right' | 'down';

  @Output() goToNextProject = new EventEmitter<number>();
  @Output() goToPreviousProject = new EventEmitter<number>();
  @Output() doCloseProject = new EventEmitter<number>();

  projectFullScreenElement!: HTMLElement;

  ngOnInit() {
    document.addEventListener('keydown', this.handleKeydown);
    this.projectFullScreenElement = document.querySelector('.project-fullscreen') as HTMLElement;

  }

  openProject(): void {
    this.isOpen = true;

    // Set a timeout to ensure the element is available in the DOM
    setTimeout(() => {
      this.projectFullScreenElement = document.querySelector('.project-fullscreen') as HTMLElement;

      if (this.projectFullScreenElement) {

        let className = 'animated-slide-in-screen-down';

        switch (this.entrance) {
          case 'left':
            className = 'animated-slide-in-screen-left';
            break;
          case 'right':
            className = 'animated-slide-in-screen-right';
            break;
          case 'down':
            className = 'animated-slide-in-screen-down';
            break;
        }
        // this.projectFullScreenElement.style.animationDuration = '0.1s';
        this.projectFullScreenElement.classList.add(className);
        setTimeout(() => {
          this.projectFullScreenElement.classList.remove(className);
        }, 200);
      }
    }, 20);
  }

  closeProject(event: Event): void {
    this.projectFullScreenElement = document.querySelector('.project-fullscreen') as HTMLElement;
    this.entrance = 'down';

    if (this.projectFullScreenElement) {
      this.projectFullScreenElement.classList.add('animated-slide-out-screen-down');
      setTimeout(() => {
        this.projectFullScreenElement.classList.remove('animated-slide-out-screen-down');
        this.doCloseProject.emit(this.index);
        this.isOpen = false;
      }, 200);
    }

    event.stopPropagation();
  }

  previousProject(event: Event): void {
    this.projectFullScreenElement = document.querySelector('.project-fullscreen') as HTMLElement;
    this.entrance = 'right';

    if (this.projectFullScreenElement) {
      this.projectFullScreenElement.classList.add('animated-slide-out-screen-left');
      setTimeout(() => {
        this.projectFullScreenElement.classList.remove('animated-slide-out-screen-left');
        this.isOpen = false;
        this.goToPreviousProject.emit(this.index);
      }, 200);
    }
  }

  nextProject(event: Event): void {
    this.projectFullScreenElement = document.querySelector('.project-fullscreen') as HTMLElement;
    this.entrance = 'left';

    if (this.projectFullScreenElement) {
      this.projectFullScreenElement.classList.add('animated-slide-out-screen-right');
      setTimeout(() => {
        this.projectFullScreenElement.classList.remove('animated-slide-out-screen-right');
        this.isOpen = false;
        this.goToNextProject.emit(this.index);
      }, 200);
    }
  }

  handleKeydown = (event: KeyboardEvent) => {
    if (!this.isOpen) return;

    switch (event.key) {
      case 'ArrowLeft':
        this.previousProject(event);
        break;
      case 'ArrowRight':
        this.nextProject(event);
        break;
      case 'Escape':
        this.closeProject(event);
        break;
    }
  };
}
