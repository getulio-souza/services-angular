import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'receber-curso-criado',
  imports: [CommonModule],
  templateUrl: './receber-curso-criado.component.html',
  styleUrl: './receber-curso-criado.component.scss',
})
export class ReceberCursoCriadoComponent {
  curso: string = '';

  constructor(private cursosService: CursosService) {}

  ngOnInit() {
    this.cursosService.emitirCursoCriado.subscribe(cursoCriado => this.curso = cursoCriado);
  }
}
