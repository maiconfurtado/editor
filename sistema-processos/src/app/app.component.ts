import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  processos = [
    {
      id: 1,
      titulo: 'Processo 001',
      conteudo: '<h2>Lorem Ipsum 001</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'
    },
    {
      id: 2,
      titulo: 'Processo 002',
      conteudo: '<h2>Lorem Ipsum 002</h2><p>Phasellus iaculis, lorem at tristique feugiat, orci magna egestas elit.</p>'
    },
    {
      id: 3,
      titulo: 'Processo 003',
      conteudo: '<h2>Lorem Ipsum 003</h2><p>Nullam ac urna eu felis dapibus condimentum sit amet a augue.</p>'
    }
  ];

  salvarConteudo(id: number, conteudo: string) {
    localStorage.setItem(`processo-${id}`, conteudo);
  }
}
