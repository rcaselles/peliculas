import { Component, OnInit } from '@angular/core';
import { PeliService } from '../../servicios/peli.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {
  apires: Observable<any>;
  busca: string = ' ';
  constructor(private servicio: PeliService) { }

  ngOnInit() {
  }
  textchanged() {
    this.apires = this.servicio.buscar(this.busca);
  }

}
