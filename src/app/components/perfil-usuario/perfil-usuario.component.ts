import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUsuario } from '../../interfaces/iusuario.interfaces';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  imports: [HeaderComponent,RouterLink],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {
  usuariosService = inject(UsersService)
  usuario: any = ""
  id = window.location.pathname.split("/")[2]

  ngOnInit() {
    this.getUsuariosById(this.id)
  }

  async getUsuariosById(id: string) {
    try {
      this.usuario = await this.usuariosService.getUsersById(id)
      console.log(this.usuario)
    } catch (msg: any){
      console.log(msg)
    }
  }
  deleteUser(id :string) {
    
    /* try {
      this.usuario = await this.usuariosService.deleteUser(this.id)
      console.log(this.usuario)
    } catch (msg: any){
      console.log(msg)
    } */
   this.usuariosService.deleteUser(id)
  }
  goBackHome() {
    
  }
}
