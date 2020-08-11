import React, { useState, useContext } from 'react';
//import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const NuevaCuenta = ({ objota, cierraVentana, props }) => {

    // extraer valores del context
    const alertasContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertasContext;

    const authContext = useContext(AuthContext);
    const { registrarUsuario, actualizarUsuario } = authContext;

    // // En caso del usuario se haya registrado o sea duplicado
    // useEffect(() => {
    //     if(authenticado){
    //         props.history.push('/');
    //     }

    //     if(mensaje){
    //         mostrarAlerta(mensaje.msg,mensaje.categoria);
    //     }
    //     // eslint-disable-next-line
    // }, [mensaje,authenticado, props.history])

    // state para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        _id: objota._id,
        nombre: objota.nombre,
        email: objota.email,
        active: objota.active,
        password: '',
        confirmar: ''
    });

    // extraer usuario
    const { nombre, email, password, confirmar, active, _id } = objota;

    const onChange = (e) => {
        //console.log(e.target.value)
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onCheckBox = (e) => {
        //console.log(e.target.checked);
        guardarUsuario({
            ...usuario,
            active : e.target.checked
        })
    }

    // function validateForm() {
    //     return email.length > 0 && password.length > 0;
    // }

    // cuando el usuario queire iniciar session
    const onSubmit = e => {
        e.preventDefault();

        //console.log(usuario.nombre + " " + usuario.email);
        // validar que no haya campos vacios
        if (usuario.nombre.trim() === '' || usuario.email.trim() === '') {
            mostrarAlerta('Todos los campos son obligatoriosss', 'alerta-error');
            return;
        }

        // Verificar estos campos solo cuando es un registro nuevo
        if (usuario._id === '') {
            // password y confirmar
            if(usuario.password.trim() === '' || usuario.confirmar.trim() === ''){
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                return;
            }
            // Password minimo de 6 caracteres
            if (usuario.password.length < 6) {
                mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
                return;
            }
            // Que los 2 passwords seaniguales
            if (usuario.password !== usuario.confirmar) {
                mostrarAlerta('El password no coincide', 'alerta-error');
                return;
            }
        }

        //pasarlo a la bd
        // registrarUsuario({
        //     nombre,
        //     email,
        //     password
        // });
        if( usuario._id === ''){
            //console.log("aqui")
            registrarUsuario({
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password
            });
        }
        else{
            //console.log("aca")
            actualizarUsuario(usuario);
        }

        // reiniciar form
        guardarUsuario({
            _id: '',
            nombre: '',
            email: '',
            active: false,
            password: '',
            confirmar: ''
        })

        cierraVentana(false);
    }

    return (
        <div className="Login" style={{ color: "white" }}>
            <form onSubmit={onSubmit}>
                {_id ?
                    <Form.Label style={{ color: "white" }}>EDITANDO USUARIO</Form.Label>
                    :
                    <Form.Label style={{ color: "white" }}>NUEVO USUARIO</Form.Label>
                }
                <Form.Group controlId="sss" style={{ display: "none" }}>
                    <Form.Label>id</Form.Label>
                    <Form.Control type="text" name="_id" defaultValue={_id} onChange={onChange} placeholder="título" />
                </Form.Group>
                <FormGroup controlId="nombre" >
                    <FormLabel>Nombre</FormLabel>
                    <FormControl
                        type="text"
                        name="nombre"
                        defaultValue={nombre}
                        onChange={onChange}
                    />
                </FormGroup>
                <FormGroup controlId="email" >
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        type="email"
                        name="email"
                        defaultValue={email}
                        onChange={onChange}
                    />
                </FormGroup>

                {
                    _id ?
                        null
                        :
                        <div>
                            <FormGroup controlId="password" >
                                <FormLabel>Password</FormLabel>
                                <FormControl
                                    defaultValue={password}
                                    name="password"
                                    onChange={onChange}
                                    type="password"
                                />
                            </FormGroup>
                            <FormGroup controlId="confirmar" >
                                <FormLabel>Confirmar password</FormLabel>
                                <FormControl
                                    defaultValue={confirmar}
                                    name="confirmar"
                                    onChange={onChange}
                                    type="password"
                                />
                            </FormGroup>
                        </div>
                }

                <FormGroup controlId="active" >
                    <FormLabel>Activo</FormLabel>
                    <FormControl
                        defaultChecked={active ? true : false}
                        name="active"
                        onChange={onCheckBox}
                        type="checkbox"
                    />
                </FormGroup>
                {_id ?
                    <Button variant="success" type="submit">
                        Actualizar
                    </Button>
                    :
                    <Button variant="success" type="submit">
                        Crear
                    </Button>
                }
                {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            </form>

        </div>
    );
}

export default NuevaCuenta;