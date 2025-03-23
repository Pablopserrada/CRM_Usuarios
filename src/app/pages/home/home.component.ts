import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { UsersService } from '../../services/users.service';
import { IUsuario } from '../../interfaces/iusuario.interfaces';
import { IResponse } from '../../interfaces/iresponse.intefaces';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  arrUsuario : IUsuario[] = []
  usuariosService = inject(UsersService)
  page : number = 0

  ngOnInit() {
    this.cargarUsuarios()
  }

  async cargarUsuarios(url:string = "") {
    try {
      let response : IResponse = await this.usuariosService.getAllUsers(url)
      this.arrUsuario = response.results
      this.page = response.page
    } catch (msg: any){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo ha ido mal",
      });
    }
  }
  goPrev() {
    this.page = this.page - 1
    this.cargarUsuarios(`https://peticiones.online/api/users/?page=${this.page}`)
  }
  goNext() {
    this.page = this.page + 1
    this.cargarUsuarios(`https://peticiones.online/api/users/?page=${this.page}`)
  }
}