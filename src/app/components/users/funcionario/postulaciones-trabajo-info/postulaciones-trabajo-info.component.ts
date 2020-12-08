import { Component, Input, OnInit } from '@angular/core';
import { PostulacionProviderService } from '../../../../providers/postulacion/postulacion-provider.service';
import { Postulacion } from '../../../../models/postulacionusuario.model';
import { usuarioHospital } from '../../../../models/usuarioHospital.model';

@Component({
  selector: 'app-postulaciones-trabajo-info',
  templateUrl: './postulaciones-trabajo-info.component.html',
  styleUrls: ['./postulaciones-trabajo-info.component.less']
})
export class PostulacionesTrabajoInfoComponent implements OnInit {

  @Input()
  public hospital: usuarioHospital;

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
      _idUsuario: "p"

    };
    postulacionUsuario._idhosp = this.hospital.email;    
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
