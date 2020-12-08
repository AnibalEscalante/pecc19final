import { Component, OnInit } from '@angular/core';
import { DatoClinica } from '../../../models/datoclinica.model';
//import { InfoclinicaService } from '../../../services/infoclinica/infoclinica.service';
import { usuarioHospital } from '../../../models/usuarioHospital.model';
import { UserHospProviderService } from '../../../providers/user-hosp/user-hosp-provider.service';

@Component({
  selector: 'app-postulaciones-trabajo-screen',
  templateUrl: './postulaciones-trabajo-screen.component.html',
  styleUrls: ['./postulaciones-trabajo-screen.component.less']
})
export class PostulacionesTrabajoScreenComponent implements OnInit {

    public hospital: usuarioHospital[];
    constructor(
      private userhospitalproviderservice: UserHospProviderService
    ) {
    }
    async ngOnInit(): Promise<void> {
    
    try {
      this.hospital = await this.userhospitalproviderservice.getPosutlaciones().toPromise();
    
    } catch (error) {
      console.log(error);
    }
  
    console.log(this.hospital);
  }
  
  //public datosClinica: DatoClinica[];
    /*constructor(/*private informacionClinica: InfoclinicaService){

}*/
/*ngOnInit(): void {
      this.datosClinica = this.informacionClinica.getAlldatosClinica();
    }
    */

}
