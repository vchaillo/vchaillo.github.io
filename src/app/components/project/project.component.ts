import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectStackComponent } from '../project-stack/project-stack.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectStackComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project!: Project;
  @Input() index!: number;
  @Input() isOpen!: boolean;
  @Input() entrance!: 'left' | 'right' | 'down';

  @Output() goToNextProject = new EventEmitter<number>();
  @Output() goToPreviousProject = new EventEmitter<number>();

  projectFullScreenElement!: HTMLElement;

  ngOnInit() {
    document.addEventListener('keydown', this.handleKeydown);
    this.projectFullScreenElement = document.querySelector('.project-fullscreen') as HTMLElement;
  }

  openProject(): void {
    this.isOpen = true;
    console.log('open ! index', this.index);

    // this.projectFullScreenElement = document.querySelector('.project-fullscreen') as HTMLElement;
    let projectFullScreenElement = document.querySelector('.project-fullscreen') as HTMLElement;

    if (projectFullScreenElement) {

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

      console.log('open ! className', className);

      projectFullScreenElement.classList.add(className);
      setTimeout(() => {
        projectFullScreenElement.classList.remove(className);
      }, 1000);
    }
  }

  closeProject(event: Event): void {
    let projectFullScreenElement = document.querySelector('.project-fullscreen') as HTMLElement;

    if (projectFullScreenElement) {
      projectFullScreenElement.classList.add('animated-slide-out-screen-down');
      setTimeout(() => {
        projectFullScreenElement.classList.remove('animated-slide-out-screen-down');
        this.isOpen = false;
      }, 1000);
    }

    event.stopPropagation();
  }

  previousProject(event: Event): void {
    this.closeProject(event);

    let projectFullScreenElement = document.querySelector('.project-fullscreen') as HTMLElement;

    console.log('projectFullScreenElement : ', projectFullScreenElement);

    if (projectFullScreenElement) {
      projectFullScreenElement.classList.add('animated-slide-out-screen-right');
      this.goToPreviousProject.emit(this.index - 1);
      setTimeout(() => {
        projectFullScreenElement.classList.remove('animated-slide-out-screen-right');
        this.isOpen = false;
        console.log('projectFullScreenElement : ', projectFullScreenElement);
      }, 1000);
    }
  }

  nextProject(event: Event): void {
    this.closeProject(event);

    let projectFullScreenElement = document.querySelector('.project-fullscreen') as HTMLElement;

    console.log('projectFullScreenElement : ', projectFullScreenElement);

    if (projectFullScreenElement) {
      projectFullScreenElement.classList.add('animated-slide-out-screen-left');
      this.goToPreviousProject.emit(this.index + 1);
      setTimeout(() => {
        projectFullScreenElement.classList.remove('animated-slide-out-screen-left');
        this.isOpen = false;
        console.log('projectFullScreenElement : ', projectFullScreenElement);
      }, 1000);
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
