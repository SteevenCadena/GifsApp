import { Component, Output, EventEmitter, Input } from '@angular/core';
import { GifService } from '../../gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  


  get historial() {
    return this.gifService.historial;
  }

  constructor( private gifService: GifService) { }

  buscar( termino: string ) {
    console.log( termino );
    this.gifService.buscarGifs(termino);

  }

}
