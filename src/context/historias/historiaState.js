import React, { useReducer } from 'react';
import historiaContext from '../historias/historiaContext';
import historiaReducer from '../historias/historiaReducer';
import{
    OBTENER_HISTORIAS,
    AGREGAR_HISTORIA,
    VALIDAR_FORMULARIO
} from '../../types'
import clienteAxios from '../../config/axios';

export default function HistoriaState(props) {

    const initialState = {
        // historias: [
        //     { id: 1, titulo: 'La casa embrujada', descripcion: 'algo algo algo' },
        //     { id: 2, titulo: 'La llorona', descripcion: 'algo algo algo' },
        //     { id: 3, titulo: 'El perico', descripcion: 'algo algo algo' },
        //     { id: 4, titulo: 'El fantasma del cuarto', descripcion: 'algo algo algo' }
        // ]
        historias: [],
        errorFormulario: false,
        mensaje: null
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(historiaReducer, initialState);

    //Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Funciones CRUD

    const agregarHistoria = async (historia) => {
        try{
            const resultados = await clienteAxios.post('/api/historias',historia);
            console.log(resultados);
            dispatch({
                type: AGREGAR_HISTORIA,
                payload: resultados.data
            })
        }catch(error){
            console.log(error);
        }
    }

    const obtenerHistorias = async (categoria) => {
        try{
            const resultados = await clienteAxios.get(`/api/historias/${categoria}`);
            //console.log(resultados);
            dispatch({
                type: OBTENER_HISTORIAS,
                payload: resultados.data.historias
            })
        }catch(error){
            console.log(error);
        }
    }


    return (
        <historiaContext.Provider
            value={{
                historias: state.historias,
                errorFormulario: state.errorFormulario,
                mensaje: state.mensaje,
                mostrarError,
                agregarHistoria,
                obtenerHistorias
            }}
        >
            {props.children}
        </historiaContext.Provider>
    )
}