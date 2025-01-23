import { Artista } from "./artista.model";
import { Cancion } from "./cancion.model";

export interface Album{
    id:number;
    titulo: String;
    anoLanzamiento:number;
    descripcion:String;
    numeroCanciones:number;
    urlPortada:String;
    artista: Artista;
    canciones:Cancion[];
    
}