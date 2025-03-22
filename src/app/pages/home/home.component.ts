import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { UsersService } from '../../services/users.service';
import { IUsuario } from '../../interfaces/iusuario.interfaces';
import { IResponse } from '../../interfaces/iresponse.intefaces';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  arrUsuario : IUsuario[] = []
  usuariosService = inject(UsersService)

  ngOnInit() {
    this.getUsuarios()
  }

  async getUsuarios() {
    try {
      let response : IResponse = await this.usuariosService.getAllUsers()
      this.arrUsuario = response.results
      console.log(this.arrUsuario)
    } catch (msg: any){
      console.log(msg)
    }
  }
}
