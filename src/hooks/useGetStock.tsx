import axios, {AxiosPromise} from "axios";
import {Vehicle} from "../interfaces/Vehicle.ts";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://vps53783.publiccloud.com.br:8080"

const fetchStock = async (): AxiosPromise<Vehicle[]> => {
    return axios.get<Vehicle[]>(API_URL + '/stock/all', {
        headers: {
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
        data: query.data?.data
    }
}