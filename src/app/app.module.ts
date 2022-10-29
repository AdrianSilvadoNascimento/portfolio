import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from '../app/main/header/header.component'
import { MaterialModule } from './material/material.module'
import { ContactMeComponent } from './main/component/contact/contact-me.component'
import { AboutMeComponent } from './main/component/about-me/about-me.component'
import { ProjectsComponent } from './main/component/projects/projects.component';
import { ProjectDescriptionComponent } from './main/component/projects/project-description/project-description.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactMeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ProjectDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
