import React, { useReducer } from 'react';
import categoriaContext from '../categorias/categoriaContext';
import categoriaReducer from '../categorias/categoriaReducer';
import {
    //FORMULARIO_CATEGORIAS,
    OBTENER_CATEGORIAS,
    OBTENER_CATEGORIAS_TODAS,
    AGREGAR_CATEGORIA,
    VALIDAR_FORMULARIO,
 //   NUMERO_HISTORIAS_CATEGORIA,
 //   CATEGORIA_ACTUAL,
 //   CATEGORIA_ACTUAL,
 //   ELIMINAR_CATEGORIA,
 //   HISTORIAS_CATEGORIAS,
 //   CATEGORIA_ERROR
} from '../../types';
import clienteAxios from '../../config/axios';
import clienteAxiosCategoria from '../../config/axiosImageCategoria';

//const CategoriaState = props => {
export default function CategoriaState(props) {

    // const catalomi = [
    //     { id: 1, titulo: 'La casa embrujada' },
    //     { id: 2, titulo: 'La llorona' },
    //     { id: 3, titulo: 'El perico' },
    //     { id: 4, titulo: 'El fantasma del cuarto' },
    //     { id: 5, titulo: 'La mujer de blanco' },
    //     { id: 6, titulo: 'El camion escolar' },
    //     { id: 7, titulo: 'La mano pachona' },
    // ];

    const initialState = {
        // categorias: [
        //     { id: 1, titulo: 'Casas embrujadas', descripcion: "algo 1" },
        //     { id: 2, titulo: 'Fantasmas', descripcion: "algo 2" },
        //     { id: 3, titulo: 'Leyendas', descripcion: "algo 3" },
        //     { id: 4, titulo: 'Sueños', descripcion: "algo 4" },
        //     { id: 5, titulo: 'Muñecos', descripcion: "algo 5" },
        //     { id: 6, titulo: 'Traileros', descripcion: "algo 6" },
        //     { id: 7, titulo: 'Policias', descripcion: "algo 7" },
        // ]
        categorias: [],
        categoriasTodas: [],
        //formulario: false,
        errorFormulario: false,
        //categoria: null,
        mensaje: null
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(categoriaReducer, initialState);

    //Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // const obtenerCategoriaActual = (categoria) => {
    //     dispatch({
    //         type: CATEGORIA_ACTUAL,
    //         payload: categoria
    //     })
    // }

    // Funciones CRUD

    const agregarCategoria = async (categoria) => {
        try{
            //console.log("agregando categoria");
            // console.log(categoria);
            // console.log(categoria.archivo[0]);

            let resultadoImagen;

            if(categoria.archivo !== null){
                const formData = new FormData();
                formData.append('archivo',categoria.archivo[0]);
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                resultadoImagen = await clienteAxiosCategoria.post('',formData,config);
                categoria.url = resultadoImagen.data;
            }

            const resultado = await clienteAxios.post('/api/categorias', categoria);
            //console.log(resultado);
            dispatch({
                type: AGREGAR_CATEGORIA,
                payload: resultado.data
            });
        }catch(error){
            console.log(error);
        }
    }

    const actualizarCategoria = async (categoria) => {
        try{
            //console.log("actualizando categoria");
            //console.log(categoria);

            let resultadoImagen;

            if(categoria.archivo !== null){
                const formData = new FormData();
                formData.append('archivo',categoria.archivo[0]);
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                resultadoImagen = await clienteAxiosCategoria.post('',formData,config);
                categoria.url = resultadoImagen.data;
            }

            await clienteAxios.put('/api/categorias/'+ categoria._id, categoria);
            obtenerCategoriasTodas();
            // console.log(resultado);
            // dispatch({
            //     type: AGREGAR_CATEGORIA,
            //     payload: resultado.data
            // });
        }catch(error){
            console.log(error);
        }
    }

    const eliminarCategoria = async (id) => {
        try{
            //console.log("actualizando categoria");
            //console.log(categoria);
            await clienteAxios.delete('/api/categorias/'+ id);
            obtenerCategoriasTodas();
            // dispatch({
            //     type: AGREGAR_CATEGORIA,
            //     payload: resultado.data
            // });
        }catch(error){
            console.log(error);
        }
    }

    const obtenerCategorias = async () => {
        try{
            const resultado = await clienteAxios.get('/api/categorias');
            //console.log(resultado);
            dispatch({
                type: OBTENER_CATEGORIAS,
                payload: resultado.data.categorias
            });
        }catch(error){
            console.log(error);
        }
    }

    const obtenerCategoriasTodas = async () => {
        try{
            const resultado = await clienteAxios.get('/api/categorias/all');
            //console.log(resultado.data.categorias);
            dispatch({
                type: OBTENER_CATEGORIAS_TODAS,
                payload: resultado.data.categorias
            });
        }catch(error){
            console.log(error);
        }
    }


    return (
        <categoriaContext.Provider
            value={{
                categorias: state.categorias,
                //formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                //categoria: state.categoria,
                mensaje: state.mensaje,
                categoriaActual: state.categoriaActual,
                categoriasTodas: state.categoriasTodas,
                obtenerCategorias,
                agregarCategoria,
                mostrarError,
                actualizarCategoria,
                eliminarCategoria,
                obtenerCategoriasTodas
                //obtenerCategoriaActual
            }}
        >
            {props.children}
        </categoriaContext.Provider>
    )
}

//export default CategoriaState;