import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
  providers: [CursosService],
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];

  constructor(private cursosService: CursosService) {}

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.cursosService.emitirCursoCriado.subscribe((curso) =>
      console.log(curso)
    );
  }
}
