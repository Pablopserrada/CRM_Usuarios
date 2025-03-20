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
  getUsersById(id : string): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.get<IUsuario>(`${this.endPoint}/${id}`))
  }
  deleteUser(id : string): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.delete<IUsuario>(`${this.endPoint}/${id}`))
  }
  /* updateUser(id : string, first_name? :string, last_name? : string, username? : string, email?: string, image?: string): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.put<IUsuario>(`${this.endPoint}/${id}`))
  } */
}
