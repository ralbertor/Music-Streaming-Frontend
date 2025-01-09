import { Album } from "./album.model";
import { Cancion } from "./cancion.model";

export interface Artista{
    id: number;
    nombre: String;
    fechaNacimiento: Date;
    nacionalidad: String;
    albumes: Album[];
    canciones: Cancion[];
}