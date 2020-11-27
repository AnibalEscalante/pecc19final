import { Injectable } from '@angular/core';
import { Registroregsithosp } from '../../models/registroregsithosp.model';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SituacionHospitalProviderService {

  constructor(private httpService: HttpService) { }
  public registroSitHosp(registrohosp: Partial<Registroregsithosp>): Observable<any>{
    console.log(registrohosp);
    return this.httpService.post<Partial<Registroregsithosp>>('/api/Registroregsithosp', registrohosp);
  };

  public getById(correo: String): Observable<any>{
    console.log(correo);

    return this.httpService.get<Registroregsithosp>('/api/Registroregsithosp'+correo);
  };
}
