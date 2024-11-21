import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { CommonModule } from '@angular/common';
import { ReceberCursoCriadoComponent } from "../receber-curso-criado/receber-curso-criado.component";
// import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@Component({
  selector: 'criar-curso',
  imports: [CommonModule, ReceberCursoCriadoComponent],
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.scss',
})

export class CriarCursoComponent implements OnInit {
  cursos: string[] = [];
  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  onAddCurso(cursoInput: HTMLInputElement){
    this.cursosService.addCurso(cursoInput.value);
    cursoInput.value = ''
  }
}
