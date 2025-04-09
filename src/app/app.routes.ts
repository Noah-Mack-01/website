import { Routes } from '@angular/router';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: 'home', component: LandingComponent},
  { path: 'projects', component: ProjectsListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
