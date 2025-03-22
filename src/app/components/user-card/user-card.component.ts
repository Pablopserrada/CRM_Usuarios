import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() miUsuario!: IUsuario;

  deleteUser() {

  }
}
