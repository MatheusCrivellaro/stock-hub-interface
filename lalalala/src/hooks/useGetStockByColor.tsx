import axios, {AxiosPromise} from "axios";
import {Vehicle} from "../interfaces/Vehicle.ts";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080"

const fetchStock = async (marca: string): AxiosPromise<Vehicle[]> => {
    return axios.get(API_URL + '/stock/marca/' + marca,
        {headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'cnpj': localStorage.getItem("cnpj")
        }});
}

export function useGetStock() {
    const query = useQuery({
        queryFn: fetchStock,
        queryKey: ['get-stock']
    })

    return {
        ...query,
        data: query?.data?.data
    }
}