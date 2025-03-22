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
  page : number = 0

  ngOnInit() {
    this.cargarUsuarios()
  }

  async cargarUsuarios(url:string = "") {
    try {
      let response : IResponse = await this.usuariosService.getAllUsers(url)
      this.arrUsuario = response.results
      this.page = response.page
      console.log(this.arrUsuario)
    } catch (msg: any){
      console.log(msg)
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


/* export class PersonajesComponent {
  arrPersonajesObservable: IPersonaje[] = [];
  arrPersonajesPromises: IPersonaje[] = [];
  personajesServices = inject(PersonajesService);
  linkPrev: string = "";
  linkNext: string = "";

  async ngOnInit() {
    /* Consumición Observables - nativo angular */
    /*
    this.personajesServices.getAllObservable().subscribe({
      next: (data) => {
        this.arrPersonajesObservable = data.items
        console.log(this.arrPersonajesObservable)
      },
      error: (error) => {
        console.log(error)
      }
    })
      

    this.cargarPersonajes();

  }

  async gotoNext() {
    this.cargarPersonajes(this.linkNext)
  }

  gotoPrev() {
    this.cargarPersonajes(this.linkPrev)
  }

  async cargarPersonajes(url: string = "") {
    Consumición Promises - generico javascript
    try {
      let response: IResponse = await this.personajesServices.getAllPromise(url)
      this.linkNext = response.links.next;
      this.linkPrev = response.links.previous;
      this.arrPersonajesPromises = response.items
    } catch (error) {
      console.log(error)
    }
  } */