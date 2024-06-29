import axios from "axios";
import {useMutation} from "@tanstack/react-query";

const API_URL = "http://api.sh.matheuscrivellaro.com.br:8080"

type LoginData = {
    username: string,
    password: string,
    cnpj: string
}

type LoginResponse = {
    token: string,
    cnpj: string
}

const fetchData = async(user: LoginData) => {
    const response =  await axios.post<LoginResponse>(API_URL + "/login", user);
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("cnpj", response.data.cnpj)
}

export function useLogin() {
    return useMutation({
        mutationFn: fetchData,
        retry: 2
    });
}