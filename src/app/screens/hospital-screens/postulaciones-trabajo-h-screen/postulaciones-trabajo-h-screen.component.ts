import { Component, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../models/datousuario.model';
//import { DatousuarioService } from '../../../services/datousuario/datousuario.service';
import { User } from '../../../models/user.model';
import { UserProviderService } from '../../../providers/user/user-provider.service';

@Component({
  selector: 'app-postulaciones-trabajo-h-screen',
  templateUrl: './postulaciones-trabajo-h-screen.component.html',
  styleUrls: ['./postulaciones-trabajo-h-screen.component.less']
})
export class PostulacionesTrabajoHScreenComponent implements OnInit {
  
  public user: User[];
  constructor(
    private userproviderservice: UserProviderService 
  ){
  }
  async ngOnInit(): Promise<void> {

    try {
      this.user = await this.userproviderservice.getUser().toPromise();
    } catch (error) {
      console.log(error);
    }
     console.log(this.user)
  }
 

}