import { Routes } from '@angular/router';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { ContatoEditComponent } from './contato-edit/contato-edit.component';
import { AccessGuard } from './security/access.guard';

export const routes: Routes = [
  { path: '', component: ContatoListComponent }, // Rota raiz
  { path: 'contato/list', component: ContatoListComponent },
  { path: 'contato/edit', canActivate: [AccessGuard], component: ContatoEditComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Garante que qualquer rota desconhecida vá pra raiz
];
