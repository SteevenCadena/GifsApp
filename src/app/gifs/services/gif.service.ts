import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';
@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey: string = '0y0tRl9TW1ty4ewsHLFXrP7ZEWg7DKFv';
  private servicioUrl: string = 'http://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultado: Gif [] = [];

  get historial() {
    return [...this._historial];
  }
  
  constructor( private http: HttpClient) { 


    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultado  = JSON.parse(localStorage.getItem('resultado')!) || '';
    // if( localStorage.getItem('historial')) {  
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }
  
  
  buscarGifs( query: string = '' ) {
    
    query = query.trim().toLowerCase();

    if( !this._historial.includes( query)) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10); 

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);


    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, {params: params})
      .subscribe( (response ) => {
        console.log(response.data);
        this.resultado = response.data;
        localStorage.setItem('resultado', JSON.stringify(response.data));
      });

  }

}
