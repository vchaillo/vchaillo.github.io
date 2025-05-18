import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LegalsPageComponent } from './pages/legals-page/legals-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
	// Main pages
	{ path: '', component: HomePageComponent, title: 'Les fleuristes' },
	{ path: 'atelier', component: AboutPageComponent, title: "About" },
	{ path: 'mentions-legales', component: LegalsPageComponent, title: 'Legals' },

	// Error pages
	{ path: '**', component: NotFoundPageComponent, title: '404 Page not found' },
];
