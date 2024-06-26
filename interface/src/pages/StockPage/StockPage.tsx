import './StockPage.css'
import {useGetStock} from "../../hooks/useGetStock.tsx";
import React from "react";
import useFiltersVehicles from "../../hooks/useFiltersVehicles.tsx";
import Card from "../../components/Card/Card.tsx";

const StockPage = () => {

    const { data, isLoading } = useGetStock();
    const { filteredVehicles, setFilters } = useFiltersVehicles(data);

    if (isLoading) return <div>Loading...</div>;

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(value)
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <div>
            <div>
                {/* Formulário de filtros */}
                <input
                    type="text"
                    name="marca"
                    placeholder="Marca"
                    onChange={handleFilterChange}
                    className="p-5 m-5"
                />
            </div>
            <ul>
                {filteredVehicles.map(vehicle => (
                    <Card vehicle={vehicle} key={vehicle.codigo}/>
                ))}
            </ul>
        </div>
    );
}

export default StockPage