import React, { useReducer } from 'react';
import categoriaContext from '../categorias/categoriaContext';
import categoriaReducer from '../categorias/categoriaReducer';
import {
    FORMULARIO_CATEGORIAS,
    OBTENER_CATEGORIAS,
    AGREGAR_CATEGORIA,
    VALIDAR_FORMULARIO,
    CATEGORIA_ACTUAL,
    ELIMINAR_CATEGORIA,
    HISTORIAS_CATEGORIAS,
    CATEGORIA_ERROR
} from '../../types';
//import clienteAxios from '../../config/axios';

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
        categorias: [
            { id: 1, titulo: 'Casas embrujadas' },
            { id: 2, titulo: 'Fantasmas' },
            { id: 3, titulo: 'Leyendas' },
            { id: 4, titulo: 'Sueños' },
            { id: 5, titulo: 'Muñecos' },
            { id: 6, titulo: 'Traileros' },
            { id: 7, titulo: 'Policias' },
        ]
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(categoriaReducer, initialState);

    // Funciones CRUD

    // const obtenerCategorias = () => {
    //     type: OBTENER_CATEGORIAS
    // }


    return (
        <categoriaContext.Provider
            value={{
                categorias: state.categorias
            }}
        >
            {props.children}
        </categoriaContext.Provider>
    )
}

//export default CategoriaState;