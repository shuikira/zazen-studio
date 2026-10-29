import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ESTUDIO, JUEGO } from '../../datos';
import { Reveal } from '../../reveal';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Reveal],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly estudio = ESTUDIO;
  protected readonly juego = JUEGO;

  protected readonly frases = [
    'Un monje hizo un voto de silencio.',
    'Tan hondo, que dejó de oír el mundo.',
    'Ahora, paso a paso, aprende a escuchar de nuevo.',
  ];

  protected bajar(): void {
    document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' });
  }
}
