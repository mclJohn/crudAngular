import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ContatoListComponent } from './app/contato-list/contato-list.component';

bootstrapApplication(ContatoListComponent, {
  providers: [provideRouter(routes)]
})
  .catch(err => console.error(err));
