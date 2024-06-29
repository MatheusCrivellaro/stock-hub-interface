import './StockPage.css'
import {useGetStock} from "../../hooks/useGetStock.tsx";
import React, {useEffect, useState} from "react";
import useFiltersVehicles from "../../hooks/useFiltersVehicles.tsx";
import useCollects from "../../hooks/useCollects.tsx";
import CheckBoxSearch from "../../components/CheckBoxSearch/CheckBoxSearch.tsx";
import {NavLink} from "react-router-dom";
import StockVehicle from "../../components/StockVehicle/StockVehicle.tsx";

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
        <>
            {isLoading ?
                <div className="container-loading">
                    <div className="spinner-border loading-item" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                    :
                    localStorage.getItem("token") ?
                        <StockVehicle
                            searchList={
                                Array.of(
                                    <CheckBoxSearch value={marcas} handle={handleMarcaChange} name="Marcas"/>,
                                    <CheckBoxSearch value={cores} handle={handleColorChange} name="Cores"/>
                                )
                            }
                            filteredVehicles={filteredVehicles}
                        />
                            :
                        <div className="container-not-login row">
                            <div className="painel-not-login col-8 shadow-lg">
                                <div className="div-painel-not-login">
                                    <h1>Faça primeiro o login</h1>
                                    <p>Percebemos que você tentou acessar uma área especial do nosso site. Para garantir
                                        que você tenha a melhor experiência possível, precisamos que você se cadastre
                                        primeiro.</p>
                                    <p>O cadastro é rápido e fácil, e você terá acesso a conteúdos exclusivos e muitas
                                        outras vantagens!</p>
                                    <p>Então, que tal se cadastrar agora? Estamos ansiosos para ter você conosco.</p>
                                    <NavLink to="/login">
                                        <button className="login-button">
                                            Login
                                        </button>
                                    </NavLink>
                                </div>
                                <img className="" src="/public/pexels-akshay-mehra-302736-10834114.jpg" alt=""/>
                            </div>
                        </div>
            }
        </>
    );
}

export default StockPage