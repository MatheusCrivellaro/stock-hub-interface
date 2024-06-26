import axios, {AxiosPromise} from "axios";
import {Vehicle} from "../interfaces/Vehicle.ts";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080"

const fetchStock = async (): AxiosPromise<Vehicle[]> => {
    return axios.get<Vehicle[]>(API_URL + '/stock/all', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'cnpj': localStorage.getItem("cnpj")
        }});
}

const extractUniqueColors = (vehicles: Vehicle[]): string[] => {
    return vehicles.map(value => value.cor)
};

export function useGetStock() {
    const query = useQuery({
        queryFn: fetchStock,
        queryKey: ['get-stock']
    })

    const data = query.data?.data

    let colors: string[] = []

    if (data)
        colors = extractUniqueColors(data);

    return {
        ...query,
        data: query.data?.data,
        colors
    }
}