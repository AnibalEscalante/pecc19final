import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatoClinica } from '../../../models/datoclinica.model';
import { InfoclinicaService } from '../../../services/infoclinica/infoclinica.service';
import { PostulacionProviderService } from '../../../providers/postulacion/postulacion-provider.service';
import { usuarioHospital } from '../../../models/usuarioHospital.model';
import { UserHospProviderService } from '../../../providers/user-hosp/user-hosp-provider.service';

@Component({
  selector: 'app-postulaciones-trabajo-info-screen',
  templateUrl: './postulaciones-trabajo-info-screen.component.html',
  styleUrls: ['./postulaciones-trabajo-info-screen.component.less']
})
export class PostulacionesTrabajoInfoScreenComponent implements OnInit {

  public id: string;
  public datosClinica: DatoClinica;
  public hospital: usuarioHospital;
  constructor(
    private userhospitalproviderservice: UserHospProviderService,
    private activatedRoute: ActivatedRoute
  ){

  }
  async ngOnInit(): Promise<void> {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.hospital = await this.userhospitalproviderservice.getPosutlacionesById(this.id).toPromise();
      //this.datosClinica = this.infoclinicaService.getdatosClinicaById(this.id);
  }

}
