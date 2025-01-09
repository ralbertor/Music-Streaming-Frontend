import { Album } from "./album.model";
import { Artista } from "./artista.model";
import { Genero } from "./genero.model";

export interface Cancion{
    id:number;
    titulo: String;
    duracion: number;
    urlCancion:String;
    artistas:Artista[];
    album:Album;
    generos:Genero[];
}