import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';


@Component({
  selector: 'app-solicitudes-promocion',
  templateUrl: './solicitudes-promocion.component.html',
  styleUrls: ['./solicitudes-promocion.component.less']
})
export class SolicitudesPromocionComponent implements OnInit {
  @Input()
  public datoUsuario: DatoUsuario;
  constructor() { }

  ngOnInit(): void {
  }

}
