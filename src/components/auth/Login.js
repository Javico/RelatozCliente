import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel  from 'react-bootstrap/FormLabel';
import "../../styles/login/Login.css";
import AuthContext from '../../context/auth/authContext';
import AlertaContext from '../../context/alertas/alertaContext';

export default function Login(props) {

    // extraer valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, authenticado, inciarSesion} = authContext;

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // En caso de que el password o usuario no exista
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
        email: '',
        password: ''
    });

    // extraer usuario
    const { email, password } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        // validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
        }

        // pasarlo a la accion
        inciarSesion({email,password});
    }

    return (
        <div className="Login" style={{color: "white"}}>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" >
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        name="email"
                        value={email}
                        // onChange={e => setEmail(e.target.value)}
                        onChange={onChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" >
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        name="password"
                        // onChange={e => setPassword(e.target.value)}
                        onChange={onChange}
                        type="password"
                    />
                </FormGroup>
                <Button block  disabled={!validateForm()} type="submit">
                    Login
                </Button>
                {alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            </form>
            
        </div>
    );
}
