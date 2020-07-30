import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliService {
  url = 'http://www.omdbapi.com';
  
  constructor(private http: HttpClient) { }
 buscar(title: string): Observable<any> {
    return this.http.get(`http://www.omdbapi.com?s=${encodeURI(title)}&type=$movie&apikey=$467708d5`).pipe(map(results => results['Search']));
  }
  detalles(id) {
    return this.http.get(`http://www.omdbapi.com?i=${id}&plot=full&apikey=$467708d5`);
  }
}
