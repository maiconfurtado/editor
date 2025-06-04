import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { EditorComponent } from './app/editor/editor.component';

const routes: Routes = [
  { path: 'editar/:id', component: EditorComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
