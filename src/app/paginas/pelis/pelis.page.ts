import { Component, OnInit } from '@angular/core';
import { PeliService } from '../../servicios/peli.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {
  apires: Observable<any>;
  busca: string = '';
  constructor(
    private servicio: PeliService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  textchanged() {
    this.apires = this.servicio.buscar(this.busca);
  }

  goToDetails(imdbID: string) {
    console.log('this is link: ', imdbID)
    this.router.navigateByUrl(`/pelis/${imdbID}`);
  }

}
