import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { usuarioHospital } from '../../models/usuarioHospital.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHospProviderService {

  constructor(private httpService: HttpService) { }

  public getPosutlaciones(): Observable<usuarioHospital[]>{
    //console.log(login);

    return this.httpService.get<usuarioHospital[]>('/api/hospital/postulacion');
  };
  
  public getPosutlacionesById(id: string): Observable<usuarioHospital>{

    return this.httpService.get<usuarioHospital>('/api/hospital/id/' + id);
  };
  
}
