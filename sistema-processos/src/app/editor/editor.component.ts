import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, EditorModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  processoId: number = 0;
  conteudo: string = '';
  modoVisualizacao: boolean = false;

  conteudoPadrao: Record<string, string> = {
    '1': `
      <h2>CONSELHO SUPERIOR DO MINISTÉRIO PÚBLICO</h2>
      <h3>ATA DA {NÚMERO ORDINAL POR EXTENSO} SESSÃO DO PLENÁRIO VIRTUAL</h3>
      <p>No período de {hh:ss} do dia {Data dd/mm/aaaa} até {hh:ss} do dia {Data dd/mm/aaaa}, na página eletrônica {url: pvmpro}, foi realizada a {número ordinal}, {ordinal por extenso} Sessão do Plenário Virtual com a participação do Conselho Superior do Ministério Público do Estado de Rondônia.</p>

      <h4>PROCESSOS JULGADOS</h4>
      <p><strong>Item 1 – SEI - 19.25.110001200.0006493/2023</strong><br>
      Autos nº: 2020001010016005<br>
      Objeto: ANPC<br>
      Assunto: Acordo de Não Persecução Cível (ANPC)<br>
      Relator: Conselheiro Chico Mendes<br>
      Decisão: Aprovado. Por Unanimidade.</p>

      <h4>PROCESSO(S) RETIRADO(S) DE PAUTA</h4>
      <p><strong>Item 3 – SEI - 19.13.110001200.0006493/2015</strong><br>
      Autos nº: 2020001010016005<br>
      Objeto: ANPC<br>
      Assunto: Acordo de Não Persecução Cível (ANPC)<br>
      Relator: Conselheiro Chico Mendes<br>
      Situação: Retirado de Pauta - Retirado a pedido do relator.</p>

      <p><strong>{Nome do Procurador-Geral de Justiça}</strong><br>
      Procurador-Geral de Justiça<br>
      Presidente do Conselho Superior do Ministério Público</p>
    `
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.processoId = Number(this.route.snapshot.paramMap.get('id'));
    const salvo = localStorage.getItem(`processo-${this.processoId}`);
    this.conteudo = salvo || this.conteudoPadrao[String(this.processoId)] || '<p>Processo sem conteúdo</p>';
  }

  salvar(): void {
    localStorage.setItem(`processo-${this.processoId}`, this.conteudo);
    this.modoVisualizacao = true;
  }

  limpar(): void {
    localStorage.removeItem(`processo-${this.processoId}`);
    this.conteudo = this.conteudoPadrao[String(this.processoId)] || '<p>Processo sem conteúdo</p>';
    this.modoVisualizacao = false;
  }

  editarNovamente(): void {
    this.modoVisualizacao = false;
  }

  imprimir(): void {
    window.print();
  }
}
