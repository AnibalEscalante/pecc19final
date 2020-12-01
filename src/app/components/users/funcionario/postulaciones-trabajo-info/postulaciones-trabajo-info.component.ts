import { Component, Input, OnInit } from '@angular/core';
import { DatoClinica } from '../../../../models/datoclinica.model';
import { PostulacionProviderService } from '../../../../providers/postulacion/postulacion-provider.service';
import { Postulacion } from '../../../../models/postulacionusuario.model';

@Component({
  selector: 'app-postulaciones-trabajo-info',
  templateUrl: './postulaciones-trabajo-info.component.html',
  styleUrls: ['./postulaciones-trabajo-info.component.less']
})
export class PostulacionesTrabajoInfoComponent implements OnInit {

  @Input()
  public datoClinica: DatoClinica;

  mensaje: string = "";
  isDivVisible = false;
  
  constructor(
    private PostulacionProviderService: PostulacionProviderService
  ) {
    
  }
  
  ngOnInit(): void {
  }
  
  public async postulacion()
  {
    let postulacionUsuario: Partial<Postulacion> = {
      _idhosp: "p",
      _idUsuario: "p"
    };
     
    try {
      console.log(postulacionUsuario);
      await this.PostulacionProviderService.createPostulacion(postulacionUsuario).subscribe();
     this.mensaje = "Postulacion exitosa";
      this.isDivVisible = true;
    
    } catch (error) {
      console.log(error);
    }
    
  }


}
