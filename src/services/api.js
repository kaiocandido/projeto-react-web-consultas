import axios from "axios"

//criando conexão com banco
export const api = axios.create({
    baseURL: 'http://localhost:3001/'
})