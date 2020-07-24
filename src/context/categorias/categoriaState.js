import React, { useReducer } from 'react';
import categoriaContext from '../categorias/categoriaContext';
import categoriaReducer from '../categorias/categoriaReducer';
import {
    //FORMULARIO_CATEGORIAS,
    OBTENER_CATEGORIAS,
    AGREGAR_CATEGORIA,
    VALIDAR_FORMULARIO,
 //   CATEGORIA_ACTUAL,
 //   CATEGORIA_ACTUAL,
 //   ELIMINAR_CATEGORIA,
 //   HISTORIAS_CATEGORIAS,
 //   CATEGORIA_ERROR
} from '../../types';
import clienteAxios from '../../config/axios';

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
        //formulario: false,
        errorFormulario: false,
        //categoria: null,
        mensaje: null,
        categoriaActual: null
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
            console.log("agregando categoria");
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


    return (
        <categoriaContext.Provider
            value={{
                categorias: state.categorias,
                //formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                //categoria: state.categoria,
                mensaje: state.mensaje,
                categoriaActual: state.categoriaActual,
                obtenerCategorias,
                agregarCategoria,
                mostrarError
                //obtenerCategoriaActual
            }}
        >
            {props.children}
        </categoriaContext.Provider>
    )
}

//export default CategoriaState;