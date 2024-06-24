import {Opcional} from "./Opcional.ts";
import {Foto} from "./Foto.ts";

interface opcionais {
    opcional: Opcional[]
}

interface fotos {
    foto: Foto[]
}

export interface Vehicle {
    cnpj: string,
    hashpaidtraffic: string,
    codigo: string,
    placaVeiculo: string,
    tipoveiculo: string,
    usadonovo: string,
    marca: string,
    modelo: string,
    anomodelo: string,
    anofabricacao: string,
    versao: string,
    combustivel: string,
    cambio: string,
    quantidadeportas: string,
    cor: string,
    chassi: string,
    renavan: string,
    km: string,
    carroceria: string,
    blindado: string,
    destaque: string,
    precooriginalvenda: string,
    precoVenda: string,
    urlreservamercadolivre: string,
    observacao: string,
    opcionais: opcionais,
    fotos: fotos,
    youtubevideo: string,
    datacriacao: string,
    dataalteracao: string,
    cilindradas: string,
    estilo: string

}