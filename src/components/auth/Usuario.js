import React, { useState, Fragment, useContext } from 'react';
//import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NuevaCuenta from '../auth/NuevaCuenta';
import authContext from '../../context/auth/authContext';


export default function Usuario({ posts, loading }) {

    // Obtener el state del formulario
    const authsContext = useContext(authContext);
    const { eliminarUsuario } = authsContext;

    const [show, setShow] = useState(false);
    const [usuario, setUsuario] = useState({
        _id: '',
        nombre: '',
        email: '',
        active: false
    });

    function cambiaEdita(valor,objeto){
        setShow(valor);
        setUsuario(objeto);
    }

    function cambiaNuevo(valor){
        setShow(valor);
        setUsuario({
            _id: '',
            nombre: '',
            email: '',
            active: false
        });
    }

    function cambiaElimina(id){
        eliminarUsuario(id);
    }

    function cierraVentana(valor){
        setShow(valor);
    }

    if (loading) {
        return <h1>loading</h1>
    }

    return (
        <Fragment>
            <div style={{marginBottom: "15px"}}>
                <Button variant="success" onClick={() => cambiaNuevo(true)} >Nuevo Usuario</Button>
            </div>
            <Table responsive striped bordered hover  variant="dark">
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Activo</th>
                        <th>-</th>
                        <th>-</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={index}>
                            {/* <td>{post._id}</td> */}
                            <td>{post.nombre}</td>
                            <td>{post.email}</td>
                            <td>{post.active.toString()}</td>
                            <td><Button variant="primary" onClick={() => cambiaEdita(true,post)}>Editar</Button></td>
                            <td><Button variant="danger" onClick={() => cambiaElimina(post._id)} >Eliminar</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className="my-modal"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title" style={{color: "white"}}>
                        Categoria
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <NuevaCuenta objota={usuario} cierraVentana={cierraVentana} />
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}
