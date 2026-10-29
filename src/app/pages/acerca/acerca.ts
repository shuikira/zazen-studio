import { Component } from '@angular/core';

import { AUTORA, EMAIL, ESTUDIO } from '../../datos';
import { Reveal } from '../../reveal';

@Component({
  selector: 'app-acerca',
  imports: [Reveal],
  templateUrl: './acerca.html',
  styleUrl: './acerca.scss',
})
export class Acerca {
  protected readonly autora = AUTORA;
  protected readonly estudio = ESTUDIO;
  protected readonly email = EMAIL;
}
