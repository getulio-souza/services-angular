import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'criar-curso',
  imports: [CommonModule],
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
