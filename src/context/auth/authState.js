import React, {useReducer} from 'react';
import AuthContext from '../auth/authContext';
import AuthReducer from '../auth/authReducer';
import clienteAxios from '../../config/axios';

import { 
    REGISTRO_EXISTOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    OBTENER_USUARIOS
} from "../../types";
import tokenAuth from '../../config/tokenAuth';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true,
        usuarios: []
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Funciones

    // Crear usuario
    const registrarUsuario = async (datos) => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios',datos);
            //console.log(respuesta.data);

            dispatch({
                type: REGISTRO_EXISTOSO,
                payload: respuesta.data
            });

            obtenerUsuarios();
            
            // Obtener usuario
            //usuarioAuth();
        } catch (error) {
            console.log(error.response.data.msg);

            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });
        }
    }

    // Retorna el usuario authenticado
    const usuarioAuth = async () => {
        const token = localStorage.getItem('token');
        //console.log(token +  ' ' +  'el test');
        if(token){
            // TODO: funcion para enviar el token por headers
            tokenAuth(token);
        }
        //console.log('por aca');
        try {
            const respuesta = await clienteAxios.get('/api/auth');
            //console.log(respuesta.data);
            //console.log('algo aqui');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_ERROR
            });
        }
    }

    // Cuando el usuario incia sesion
    const inciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            //console.log(respuesta);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });
            //console.log('hola');
            usuarioAuth();
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }

    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    // Actualizar información del usuario
    const actualizarUsuario = async (usuario) => {
        try{
            //console.log("actualizando categoria");
            //console.log(categoria);
            await clienteAxios.put('/api/usuarios/'+ usuario._id, usuario);
            obtenerUsuarios();
            // console.log(resultado);
            // dispatch({
            //     type: AGREGAR_CATEGORIA,
            //     payload: resultado.data
            // });
        }catch(error){
            console.log(error);
        }
    }

    // Eliminar usuario
    const eliminarUsuario = async (id) => {
        try{
            //console.log("actualizando categoria");
            //console.log(categoria);
            await clienteAxios.delete('/api/usuarios/'+ id);
            obtenerUsuarios();
            // dispatch({
            //     type: AGREGAR_CATEGORIA,
            //     payload: resultado.data
            // });
        }catch(error){
            console.log(error);
        }
    }

    // Obtener usuarios
    const obtenerUsuarios = async () => {
        try{
            const resultado = await clienteAxios.get('/api/usuarios');
            //console.log(resultado);
            dispatch({
                type: OBTENER_USUARIOS,
                payload: resultado.data.usuarios
            });
        }catch(error){
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticado: state.authenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                usuarios: state.usuarios,
                registrarUsuario,
                inciarSesion,
                usuarioAuth,
                cerrarSesion,
                eliminarUsuario,
                obtenerUsuarios,
                actualizarUsuario
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;