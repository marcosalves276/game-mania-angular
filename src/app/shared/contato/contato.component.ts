import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  public nome!: string;
  public email!: string;
  public msg!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var formulario = `
    Nome: ${form.value.nome}
    Email: ${form.value.email}
    Mensagem: ${form.value.msg}
    `; 
    console.log(formulario)
    alert("mensagem enviada, verifique o console.")
  }
}
