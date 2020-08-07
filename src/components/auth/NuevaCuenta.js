import React, { useState, useContext, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel  from 'react-bootstrap/FormLabel';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const NuevaCuenta = (props) => {

    // extraer valores del context
    const alertasContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertasContext;

    const authContext = useContext(AuthContext);
    const {mensaje, authenticado, registrarUsuario} = authContext;

    // En caso del usuario se haya registrado o sea duplicado
    useEffect(() => {
        if(authenticado){
            props.history.push('/');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg,mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje,authenticado, props.history])

    // state para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // function validateForm() {
    //     return email.length > 0 && password.length > 0;
    // }

    // cuando el usuario queire iniciar session
    const onSubmit = e => {
        e.preventDefault();

        //console.log(nombre + " " + email)
        // validar que no haya campos vacios
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // Password minimo de 6 caracteres
        if(password.length < 6){
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        // Que los 2 passwords seaniguales
        if(password !== confirmar){
            mostrarAlerta('El password no coincide', 'alerta-error');
            return;
        }

        //pasarlo a la bd
        registrarUsuario({
            nombre,
            email,
            password
        });
    }

    return (
        <div className="Login" style={{color: "white"}}>
            <form onSubmit={onSubmit}>
                <FormGroup controlId="nombre" >
                    <FormLabel>Nombre</FormLabel>
                    <FormControl
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={onChange}
                    />
                </FormGroup>
                <FormGroup controlId="email" >
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" >
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        name="password"
                        onChange={onChange}
                        type="password"
                    />
                </FormGroup>
                <FormGroup controlId="confirmar" >
                    <FormLabel>Confirmar password</FormLabel>
                    <FormControl
                        value={confirmar}
                        name="confirmar"
                        onChange={onChange}
                        type="password"
                    />
                </FormGroup>
                <Button block type="submit">
                    Crear
                </Button>
                {alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            </form>
            
        </div>
    );
}

export default NuevaCuenta;