import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoading = true;

  ngOnInit() {
    window.onload = () => {
      // setTimeout(() => {
      this.isLoading = false;
      // }, 500);
    }
  }

  ngAfterViewInit() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // const animatedElements = document.querySelectorAll('[class^="animated"]');
    const animatedElements = document.querySelectorAll('.title');


    // const studiesTitle = document.querySelector('#studies-title');
    // if (studiesTitle) {
    //   const rect = studiesTitle.getBoundingClientRect();
    //   const windowHeight = window.innerHeight;
    //   if (rect.top > 0 && rect.top < windowHeight) {
    //     console.log('studiesTitle in view port !');

    //     studiesTitle.classList.add('animated-slide-fade-in-left');
    //   } else {
    //     studiesTitle.classList.remove('animated-slide-fade-in-left');
    //   }
    // }

    if (animatedElements) {
      // console.log('animatedElements : ', animatedElements);

      animatedElements.forEach((element: Element) => {

        // console.log('ElementText : ', element.textContent);

        let animatedClass = '';
        element.classList.forEach((className: string) => {
          if (className.startsWith('animated')) {
            animatedClass = className;
          }
        });

        // console.log('animatedClass', animatedClass);


        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top > 0 && rect.top < windowHeight) {

          // console.warn('Add class to : ', element.textContent);
          // console.log('rect.top', rect.top);
          // console.log('windowHeight', windowHeight);

          element.classList.add(animatedClass);
        } else {

          // console.error('Remove class from : ', element.textContent);
          // console.log('rect.top', rect.top);
          // console.log('windowHeight', windowHeight);

          element.classList.remove(animatedClass);
        }
      });
    }
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
