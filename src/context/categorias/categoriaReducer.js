import {
    //FORMULARIO_CATEGORIAS,
    OBTENER_CATEGORIAS,
    OBTENER_CATEGORIAS_TODAS,
    AGREGAR_CATEGORIA,
    VALIDAR_FORMULARIO,
 //   NUMERO_HISTORIAS_CATEGORIA,
 //   CATEGORIA_ACTUAL,
 //   ELIMINAR_CATEGORIA,
 //   HISTORIAS_CATEGORIAS,
    CATEGORIA_ERROR
} from '../../types';

export default (state, action) => {
    switch (action.type) {       
        case AGREGAR_CATEGORIA:
            return{
                ...state,
                categoriasTodas: [...state.categoriasTodas, action.payload],
                //formulario: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorFormulario: true
            }
        case OBTENER_CATEGORIAS:
            return{
                ...state,
                categorias: action.payload
            }
        case OBTENER_CATEGORIAS_TODAS:
            return{
                ...state,
                categoriasTodas: action.payload
            }
        case CATEGORIA_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}