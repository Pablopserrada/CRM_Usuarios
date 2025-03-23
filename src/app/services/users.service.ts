import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario.interfaces';
import { lastValueFrom } from 'rxjs';
import { IResponse } from '../interfaces/iresponse.intefaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private endPoint: string = "https://peticiones.online/api/users"
  private httpClient = inject(HttpClient);
  page : number = 1

  getAllUsers(url : string): Promise<IResponse>  {
    url = (url === "") ? `https://peticiones.online/api/users/?page=${this.page}` : url
    return lastValueFrom(this.httpClient.get<IResponse>(url))
  }
  getUsersById(id : string): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.get<IUsuario>(`${this.endPoint}/${id}`))
  }
  deleteUser(id : string): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.delete<IUsuario>(`${this.endPoint}/${id}`))
  }
  updateUser(id : string, body : any) {
    return lastValueFrom(this.httpClient.put<IUsuario>(`${this.endPoint}/${id}`,body))
  }
  createUser(body : IUsuario) {
    return lastValueFrom(this.httpClient.post<IUsuario>(`${this.endPoint}`,body))
  }
}
