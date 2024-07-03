import './StockVehicle.css'
import Card from "../Card/Card.tsx";
import {ReactNode} from "react";
import {Vehicle} from "../../interfaces/Vehicle.ts";

type props = {
    searchList: ReactNode[];
    filteredVehicles: Vehicle[]
}

const StockVehicle = ({searchList, filteredVehicles}: props) => {
    return (
        <div className="row">
            <div className="col-3 container-search">
                <h2 className="">Buscas</h2>
                {searchList.map((item) => item)}
            </div>
            <div className={(filteredVehicles.length > 0) ? "container-itens col-9 row" : 'container-itens-empty col-9 row'}>
                {filteredVehicles.length === 0 &&
                    <div className="">Nada encontrado :(</div>}
                {filteredVehicles.map(vehicle => (
                    <Card vehicle={vehicle} key={vehicle.codigo}/>
                ))}
            </div>
        </div>
    )
}

export default StockVehicle