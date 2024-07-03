import {Opcional} from "./Opcional.ts";
import {Foto} from "./Foto.ts";

interface opcionais {
    opcional: Opcional[]
}

interface fotos {
    foto: Foto[]
}

export interface Vehicle {
    codigo: string;
    placaveiculo: string;
    marca: string;
    modelo: string;
    versao: string;
    combustivel: string;
    cambio: string;
    cor: string;
    km: string;
    carroceria: string;
    precovenda: string;
    opcionais: opcionais;
    fotos: fotos;
}