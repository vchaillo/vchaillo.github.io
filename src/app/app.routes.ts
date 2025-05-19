import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LegalsPageComponent } from './pages/legals-page/legals-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';

export const routes: Routes = [
	// Main pages
	{ path: '', component: HomePageComponent, title: 'Valentin Chaillou' },
	// { path: 'about', component: AboutPageComponent, title: "About" },
	// { path: 'resume', component: ResumePageComponent, title: "Resume" },
	{ path: 'legals', component: LegalsPageComponent, title: 'Legals' },

	// Projects pages
	// { path: 'projects/:project-name', component: ProjectsPageComponent, title: 'Projects' },

	// Error pages
	{ path: '**', component: NotFoundPageComponent, title: '404 Page not found' },
];
