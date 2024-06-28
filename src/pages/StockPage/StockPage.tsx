import './StockPage.css'
import {useGetStock} from "../../hooks/useGetStock.tsx";
import React, {useEffect, useState} from "react";
import useFiltersVehicles from "../../hooks/useFiltersVehicles.tsx";
import Card from "../../components/Card/Card.tsx";
import useCollects from "../../hooks/useCollects.tsx";
import CardLoading from "../../components/CardLoading/CardLoading.tsx";
import CheckBoxSearch from "../../components/CheckBoxSearch/CheckBoxSearch.tsx";

const StockPage = () => {

    const { data, isLoading } = useGetStock();
    const { filteredVehicles, setFilters } = useFiltersVehicles(data);
    const { cores, marcas } = useCollects(data)
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedMarcas, setSelectedMarcas] = useState<string[]>([]);

    // const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFilters(prevFilters => ({
    //         ...prevFilters,
    //         [name]: value,
    //     }));
    // };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setSelectedColors(prevColors => {
            return checked ? [...prevColors, value] : prevColors.filter(color => color !== value);
        });
    };

    const handleMarcaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setSelectedMarcas(prevMarcas => {
            return checked ? [...prevMarcas, value] : prevMarcas.filter(marca => marca !== value);
        });
    };

    useEffect(() => {
        setFilters(prevFilters => ({
            ...prevFilters,
            cores: selectedColors,
            marcas: selectedMarcas,
        }));
    }, [selectedColors, selectedMarcas, setFilters]);

    return (
        <div className="container-stock row">
            <div className="container-search col-4">
                <h2>Buscas</h2>

                <CheckBoxSearch value={marcas} handle={handleMarcaChange} name="Marcas"/>
                <CheckBoxSearch value={cores} handle={handleColorChange} name="Cores"/>

            </div>
            <div
                className={(!isLoading ? ((filteredVehicles.length > 0) ? "container-itens col-8 row" : 'container-itens-empty col-8 row') : "col-8 row")}>
                {isLoading &&
                    <div className="container-itens-loading row">
                        <CardLoading />
                        <CardLoading />
                        <CardLoading />
                        <CardLoading />
                        <CardLoading />
                        <CardLoading />
                        <CardLoading />
                        <CardLoading />
                    </div>
                }
                {filteredVehicles.length === 0 && !isLoading &&
                    <div className="">Nada encontrado :(</div>
                }
                {filteredVehicles.map(vehicle => (
                    <Card vehicle={vehicle} key={vehicle.codigo}/>
                ))}
            </div>
        </div>
    );
}

export default StockPage