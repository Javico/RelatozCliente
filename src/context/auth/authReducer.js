import {
    REGISTRO_EXISTOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    OBTENER_USUARIOS
} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticado: true,
                mensaje: null,
                cargando: false
            }
        case REGISTRO_EXISTOSO:
            return {
                ...state,
                mensaje: null,
                cargando: false
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                usuario: null,
                authenticado: false,
                mensaje: action.payload,
                cargando: false
            }
        case REGISTRO_ERROR:
            //localStorage.removeItem('token');
            return {
                ...state,
                //token: null,
                //usuario: null,
                //authenticado: false,
                mensaje: action.payload,
                cargando: false
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                authenticado: true,
                usuario: action.payload,
                cargando: false
            }
        case OBTENER_USUARIOS:
            return {
                ...state,
                usuarios: action.payload
            }
        default:
            return state;
    }
}