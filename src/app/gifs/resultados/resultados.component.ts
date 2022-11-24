import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent  {

  get resultado(){
    return this.gifService.resultado;
  }
  constructor( private gifService: GifService) { }


}
