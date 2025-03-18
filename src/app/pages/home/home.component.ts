import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ListaUsuariosComponent } from "../../components/lista-usuarios/lista-usuarios.component";
import { UsersService } from '../../services/users.service';
import { IUsuario } from '../../interfaces/iusuario.interfaces';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ListaUsuariosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  /* arrUsuario : IUsuario[] = []
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
  } */
}
