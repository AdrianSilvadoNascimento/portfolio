import { ProjectDescriptionComponent } from './main/component/projects/project-description/project-description.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutMeComponent } from '../app/main/component/about-me/about-me.component'
import { ProjectsComponent } from './main/component/projects/projects.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
