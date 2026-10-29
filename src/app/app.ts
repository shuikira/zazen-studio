import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { EMAIL, ESTUDIO } from './datos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly estudio = ESTUDIO;
  protected readonly email = EMAIL;
  protected readonly anio = new Date().getFullYear();
}
