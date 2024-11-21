import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursosComponent } from "./component/cursos/cursos.component";
import { CursosService } from './component/cursos/cursos.service';
import { CriarCursoComponent } from "./component/cursos/criar-curso/criar-curso.component";
import { LogService } from './shared/log.service';
import { PipesComponent } from "./component/pipes/pipes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CursosComponent, CriarCursoComponent, PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CursosService, LogService]
})
export class AppComponent {
  title = 'curso-angular';
}
