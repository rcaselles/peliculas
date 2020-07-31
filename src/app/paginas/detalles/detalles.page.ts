import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliService } from '../../servicios/peli.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  constructor(
    private servicio: PeliService,
    private ruta: ActivatedRoute
  ) { }
  informacion = null;

  ngOnInit() {
    let id = this.ruta.snapshot.paramMap.get("id");
    this.servicio.detalles(id).subscribe(resultado => {
      this.informacion = resultado;
      console.log('this is information: ', this.informacion);
    });
  }

}
