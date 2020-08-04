import React, { Fragment, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import NuevaHistoria from '../historias/NuevaHistoria';
import HistoriaContext from '../../context/historias/historiaContext';

export default function Historia({ posts, loading }) {

    // Obtener el state del formulario
    const historiasContext = useContext(HistoriaContext);
    const { eliminarHistoria } = historiasContext;

    const [show, setShow] = useState(false);
    const [historia, setHistoria] = useState({
        _id: '',
        titulo: '',
        descripcion: '',
        historiaDetalle: ''
    });

    function cambiaEdita(valor, objeto) {
        setShow(valor);
        setHistoria(objeto);
    }

    function cambiaNuevo(valor) {
        setShow(valor);
        setHistoria({
            _id: '',
            titulo: '',
            descripcion: '',
            historiaDetalle: ''
        });
    }

    function cambiaElimina(id) {
        eliminarHistoria(id);
    }

    function cierraVentana(valor) {
        setShow(valor);
    }

    if (loading) {
        return <h1>loading</h1>
    }

    return (
        <Fragment>
            <div style={{ marginBottom: "15px" }}>
                <Button variant="success" onClick={() => cambiaNuevo(true)} >Nueva historia</Button>
            </div>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Detalle</th>
                        <th>-</th>
                        <th>-</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={index}>
                            {/* <td>{post._id}</td> */}
                            <td>{post.titulo}</td>
                            <td>{post.descripcion}</td>
                            <td>{post.historiaDetalle}</td>
                            <td><Button variant="primary" onClick={() => cambiaEdita(true, post)}>Editar</Button></td>
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
                    <Modal.Title id="example-custom-modal-styling-title" style={{ color: "white" }}>
                        Categoria
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NuevaHistoria obj={historia} cierraVentana={cierraVentana} />
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}
