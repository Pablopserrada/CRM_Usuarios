import { Component, inject, Input } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUsuario } from '../../interfaces/iusuario.interfaces';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-usuarios',
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './form-usuarios.component.html',
  styleUrl: './form-usuarios.component.css'
})
export class FormUsuariosComponent {
  @Input() idUsuario : string = ""
  usuario! : IUsuario
  userForm : FormGroup = new FormGroup ({}, [])
  usuariosService = inject(UsersService);

  async ngOnInit() {
    console.log(this.idUsuario)
    let path = (window.location.pathname.split('/'))
    let expresion_email = /\S+\@[gmail, hotmail]\S+/
    let expresion_last_name = /\S\s\S/
    let expresion_image = /(https?:\/\/.*\.(?:png|jpg|jpeg|svg))/i;
    if (path[1] === "actualizarUsuario") {
      this.idUsuario = path[2]
    }
    if (this.idUsuario) {
      try {
        this.usuario = await this.usuariosService.getUsersById(this.idUsuario)
      }
      catch(msg: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No hemos podido encontrar el usuario",
        });
      }
    }
    this.userForm = new FormGroup({
      _id : new FormControl(this.idUsuario || null, []),
      first_name: new FormControl(this.usuario?.first_name || "", [
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl(this.usuario?.last_name || "", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(expresion_last_name)

      ]),
      email: new FormControl(this.usuario?.email || "", [
        Validators.required,
        Validators.pattern(expresion_email)
      ]),
      image: new FormControl(this.usuario?.image || "", [
        Validators.required,
        Validators.pattern(expresion_image)
      ]),
    })
  }

  getDataForm() {
    if (this.userForm.value._id) {
      this.usuario.username = this.usuario.first_name.split(" ").join("").toLowerCase() + "." + this.usuario.last_name.split(" ").join("").toLowerCase()
      this.usuario.email = this.usuario.first_name.split(" ").join("").toLowerCase() + "." + this.usuario.last_name.split(" ").join("").toLowerCase() + "@gmail.com"
      this.usuariosService.updateUser(this.idUsuario, this.usuario)
    } else {
      this.usuariosService.createUser(this.userForm.value)
    }
    this.userForm.reset()
  }
  checkFields(controlName: string, errorName: string) : boolean | undefined {
    return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched
  }
}
