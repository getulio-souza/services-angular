import { Component } from '@angular/core';
import { ExemplosPipesComponent } from "./exemplos-pipes/exemplos-pipes.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [ExemplosPipesComponent, CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {

}
