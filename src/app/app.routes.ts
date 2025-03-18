import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormUsuariosComponent } from './components/form-usuarios/form-usuarios.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: HomeComponent },
    { path: "nuevoUsuario", component: FormUsuariosComponent},
    { path: "actualizarUsuario/:_id", component:FormUsuariosComponent},
    { path: "**", redirectTo: "home" }
];
