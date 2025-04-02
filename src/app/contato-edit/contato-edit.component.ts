import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Contato } from '../models/contato.model'
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-contato-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato-edit.component.html',
  styleUrls: ['./contato-edit.component.css']
})
export class ContatoEditComponent {
  
  class_validate = "needs-validation";

  contato!: Contato;

  constructor(private contatosService: ContatoService){

  }

  valida_campos_dados(): boolean{
     if (this.form_dados.invalid) {
    this.class_validate = "was-validated";
    return false;
  }else{
     this.class_validate = "needs-validation";
     return true;
   }
  }
  
  form_dados = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]), // Melhor validar email corretamente
    telefone: new FormControl('', Validators.required)
  });

  get f_dados() { return this.form_dados.controls; }

  salvar() {
    if (this.valida_campos_dados()) {
      this.contato = Object.assign(this.form_dados.value)
      this.contatosService.saveContato(this.contato)
  }
}

  
}
