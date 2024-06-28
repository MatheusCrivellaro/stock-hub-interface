import './Card.css'
import {Vehicle} from "../../interfaces/Vehicle.ts";
import Carousel from "../Carousel/Carousel.tsx";

type props = {
    vehicle: Vehicle
}

const Card = ({ vehicle }: props) => {
    return (

        <div className="card-vehicle col-4">
            <Carousel fotos={vehicle.fotos.foto} placa={vehicle.placaVeiculo} key={vehicle.codigo + 'a'}/>
            <div>
                <h2>{vehicle.modelo}</h2>
                <p>{vehicle.cor}</p>
                <p>{vehicle.marca}</p>
                <p>R${vehicle.precoVenda}</p>
            </div>
        </div>

    )
}

export default Card