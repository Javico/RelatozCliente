import{
    OBTENER_HISTORIAS,
    OBTENER_HISTORIAS_TODAS,
    AGREGAR_HISTORIA,
    VALIDAR_FORMULARIO
} from '../../types'

export default (state, action) => {
    switch (action.type) {   
        case AGREGAR_HISTORIA:
            return{
                ...state,
                historiasTodas: [...state.historiasTodas, action.payload],
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorFormulario: true
            }
        case OBTENER_HISTORIAS:
            return{
                ...state,
                historias: action.payload
            }   
        case OBTENER_HISTORIAS_TODAS:
            return{
                ...state,
                historiasTodas: action.payload
            }
        default:
            return state;
    }
}