import React, { useReducer } from 'react';
import historiaContext from '../historias/historiaContext';
import historiaReducer from '../historias/historiaReducer';
import{
    OBTENER_HISTORIAS,
} from '../../types'

export default function HistoriaState(props) {

    const initialState = {
        historias: [
            { id: 1, titulo: 'La casa embrujada', descripcion: 'algo algo algo' },
            { id: 2, titulo: 'La llorona', descripcion: 'algo algo algo' },
            { id: 3, titulo: 'El perico', descripcion: 'algo algo algo' },
            { id: 4, titulo: 'El fantasma del cuarto', descripcion: 'algo algo algo' }
        ]
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(historiaReducer, initialState);

    // Funciones CRUD

    // const obtenerCategorias = () => {
    //     type: OBTENER_CATEGORIAS
    // }


    return (
        <historiaContext.Provider
            value={{
                historias: state.historias
            }}
        >
            {props.children}
        </historiaContext.Provider>
    )
}