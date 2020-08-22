import axios from 'axios';

//console.log(process.env.REACT_APP_BACKEND_URL);

const clienteAxiosCategoria = axios.create({
    baseURL: process.env.REACT_APP_FUNCTION_CATEGORIA
});

export default clienteAxiosCategoria;