import { Cancion } from "./cancion.model";

export interface Genero{
    id:number;
    nombre:String;
    descripcion:String;
    anoOrigen:number;
    canciones:Cancion[];
}