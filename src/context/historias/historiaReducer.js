import{
    OBTENER_HISTORIAS,
    AGREGAR_HISTORIA,
    VALIDAR_FORMULARIO
} from '../../types'

export default (state, action) => {
    switch (action.type) {   
        case AGREGAR_HISTORIA:
            return{
                ...state,
                historias: [...state.historias, action.payload],
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
        default:
            return state;
    }
}