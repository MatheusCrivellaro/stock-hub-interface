import axios, {AxiosPromise} from "axios";
import {Vehicle} from "../interfaces/Vehicle.ts";
import {useMutation, useQuery} from "@tanstack/react-query";

const API_URL = "http://localhost:8080"

const fetchData = async(marca: string): AxiosPromise<Vehicle[]> => {
    return await axios.post<Vehicle[]>(API_URL + "/stock/marca/", marca);
}

export function useLogin() {
    return useMutation({
        mutationFn: fetchData
    });
}