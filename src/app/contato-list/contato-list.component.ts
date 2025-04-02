import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';  // Necessário para usar a navegação
import { ContatoService } from '../services/contato.service';
import { Contato } from '../models/contato.model';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css'],
  standalone: true,  // O componente é standalone
  imports: [CommonModule, RouterModule]  // Importações necessárias
})
export class ContatoListComponent {

  contatos: Array<Contato> = [];

  constructor(private contatoService: ContatoService, private router: Router) {
    this.contatos = this.contatoService.getContatos();
  }

  remover(id: number) {
    this.contatoService.removeContato(id);
    this.contatos = this.contatoService.getContatos(); // Atualiza a lista após remover
  }

  editar(id: number) {
    this.router.navigateByUrl('/contato/edit', { state: { idContato: id } });
  }
}
