import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario.interfaces';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private endPoint: string = "https://peticiones.online/api/users"
  private httpClient = inject(HttpClient);

  getAllUsers(): Promise<IUsuario[]>  {
    return lastValueFrom(this.httpClient.get<IUsuario[]>(this.endPoint))
  }
}
