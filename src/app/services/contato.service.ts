import { Injectable } from '@angular/core';
import { Contato } from '../models/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  static contatos: Array<Contato> = [
    { "id": 1, "nome": "Thiago", "email": "marianomaciel@gmail.com", "telefone": "75822235566" },
    { "id": 2, "nome": "Teko", "email": "tekomaciel@gmail.com", "telefone": "75822231466" }
  ];

  // Agora o idGlobal começa com o maior ID da lista existente
  static idGlobal: number = ContatoService.contatos.length > 0 
    ? Math.max(...ContatoService.contatos.map(c => c.id)) 
    : 0;

  constructor() {}

  getContatos(){
    return ContatoService.contatos;
  }

  saveContato(contatoParam: Contato) {
    if (contatoParam.id) {
      // Encontrar e atualizar contato existente
      const index = ContatoService.contatos.findIndex(c => c.id === contatoParam.id);
      if (index !== -1) {
        ContatoService.contatos[index] = contatoParam;
      }
    } else {
      // Criar novo contato com ID único
      ContatoService.idGlobal++;
      contatoParam.id = ContatoService.idGlobal;
      ContatoService.contatos.push(contatoParam);
    }
    console.log(ContatoService.contatos);
  }

  removeContato(id: number){
    ContatoService.contatos = ContatoService.contatos.filter(contato => contato.id !== id);
  }
}
