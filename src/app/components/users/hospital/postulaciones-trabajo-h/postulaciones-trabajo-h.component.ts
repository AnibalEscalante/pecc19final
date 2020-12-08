import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../../models/datousuario.model';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-postulaciones-trabajo-h',
  templateUrl: './postulaciones-trabajo-h.component.html',
  styleUrls: ['./postulaciones-trabajo-h.component.less']
})
export class PostulacionesTrabajoHComponent implements OnInit {

  @Input()
  public user: User;
  constructor() { }
  
  ngOnInit(): void {
  }
}
