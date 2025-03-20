import { Component, inject } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interfaces';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-lista-usuarios',
  imports: [],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {

  arrUsuario : IUsuario[] = []
  usuariosService = inject(UsersService)

  ngOnInit() {
    this.getUsuarios()
  }

  async getUsuarios() {
    try {
      this.arrUsuario = await this.usuariosService.getAllUsers()
      console.log(this.arrUsuario)
    } catch (msg: any){
      console.log(msg)
    }
  }
}
