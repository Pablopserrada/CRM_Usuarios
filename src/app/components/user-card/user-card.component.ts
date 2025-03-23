import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interfaces';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  usersService = inject(UsersService);
  @Input() miUsuario!: IUsuario;
  router = inject(Router);

  deleteUser(id: any) {
    Swal.fire({
      title: `¿Deseas eliminar al usuario ${this.miUsuario.first_name}?`,
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
          this.usersService.deleteUser(id);
        } catch (msg) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo ha ido mal",
          });
        }
      }
    });
  }
}
