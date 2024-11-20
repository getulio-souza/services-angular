import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];
  cursosService!: CursosService;

  constructor(private http: HttpClient) {
    this.cursosService = new CursosService();
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
