import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursosComponent } from "./component/cursos/cursos.component";
import { CursosService } from './component/cursos/cursos.service';
import { CriarCursoComponent } from "./component/cursos/criar-curso/criar-curso.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CursosComponent, CriarCursoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CursosService]
})
export class AppComponent {
  title = 'curso-angular';
}
