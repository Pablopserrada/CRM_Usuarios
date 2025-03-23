import { Component, inject, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { IUsuario } from '../../interfaces/iusuario.interfaces';

@Component({
  selector: 'app-perfil-usuario',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css',
})
export class PerfilUsuarioComponent {
  usuariosService = inject(UsersService);
  @Input() usuario!: IUsuario;
  id = window.location.pathname.split('/')[2];
  router = inject(Router);

  ngOnInit() {
    this.getUsuariosById(this.id);
  }

  async getUsuariosById(id: string) {
    try {
      this.usuario = await this.usuariosService.getUsersById(id);
    } catch (msg: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo ha ido mal.",
      });
    }
  }
  deleteUser(id: any) {
    console.log(id);
    Swal.fire({
      title: `¿Deseas eliminar al usuario ${this.usuario.first_name}?`,
      text: 'No podrás revertir estos cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', '', 'success');
        try {
          this.usuariosService.deleteUser(id);
          this.router.navigate(['/home']);
        } catch (msg) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo ha ido mal.",
          });
        }
      }
    });
  }
  goBackHome() {
    this.router.navigate(['/home']);
  }
}
