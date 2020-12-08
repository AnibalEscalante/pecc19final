import { Component, Input, OnInit } from '@angular/core';
import { DatoClinica } from '../../../../models/datoclinica.model';
import { usuarioHospital } from '../../../../models/usuarioHospital.model';
import { UserHospProviderService } from '../../../../providers/user-hosp/user-hosp-provider.service';

@Component({
  selector: 'app-postulaciones-trabajo',
  templateUrl: './postulaciones-trabajo.component.html',
  styleUrls: ['./postulaciones-trabajo.component.less']
})
export class PostulacionesTrabajoComponent implements OnInit {

  @Input()
  public hospital: usuarioHospital;
  constructor() {
    
  }

  ngOnInit(): void {
    
     
   
  }

}
