import { IUsuario } from "./iusuario.interfaces";

export interface IResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    results:     IUsuario[];
}

