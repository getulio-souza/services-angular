import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'exemplos-pipes',
  imports: [CommonModule],
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.scss'
})
export class ExemplosPipesComponent {
  livro: any = {
    title: 'the first book',
    pages: 341,
    price: 12.12,
    date: new Date(12,12,12),
    rating: 4.5435
  }
}
