import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http/http.service';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {

  constructor(private httpService: HttpService) { }
  public registrousuario(user: Partial<User>): Observable<any>{
    //console.log(user);
    return this.httpService.post<Partial<User>>('/api/user/register', user);
  };

  public loginUsuario(login: String): Observable<User>{
    //console.log(login);

    return this.httpService.get<User>('/api/user/login/'+login);
  };

  public eliminarUsuario(email: String): Observable<any>{
    console.log(email);

    return this.httpService.delete<User>('/api/user/delete/'+ email);
  };
  
  public modificarUsuario(email: Partial<User>): Observable<any>{
    console.log(email);
    return this.httpService.patch<Partial<User>>('/api/user/modificar', email);
  };


}
