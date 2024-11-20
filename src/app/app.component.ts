import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursosComponent } from "./component/cursos/cursos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-angular';
}
