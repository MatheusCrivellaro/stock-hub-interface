import './Card.css'
import {Vehicle} from "../../interfaces/Vehicle.ts";
import Carousel from "../Carousel/Carousel.tsx";

type props = {
    vehicle: Vehicle
}

const Card = ({ vehicle }: props) => {
    return (

        <div className="card-vehicle col-4">
            <Carousel fotos={vehicle.fotos.foto} placa={vehicle.placaveiculo} key={vehicle.codigo + 'a'}/>
            <div>
                <p>Código: {vehicle.codigo}</p>
                <p>PlacaVeiculo: {vehicle.placaveiculo}</p>
                <p>Marca: {vehicle.marca}</p>
                <p>Modelo: {vehicle.modelo}</p>
                <p>Versao: {vehicle.versao}</p>
                <p>Combustivel: {vehicle.combustivel}</p>
                <p>Cambio: {vehicle.cambio}</p>
                <p>Cor: {vehicle.cor}</p>
                <p>KM: {vehicle.km}</p>
                <p>Carroceria: {vehicle.carroceria}</p>
                <p>PrecoVenda: {vehicle.precovenda}</p>
            </div>
        </div>

    )
}

export default Card