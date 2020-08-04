import React, { useState, Fragment, useContext } from 'react';
//import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NuevaCategoria from '../categorias/NuevaCategoria';
import categoriaContext from '../../context/categorias/categoriaContext';


export default function Categoria({ posts, loading }) {

    // Obtener el state del formulario
    const categoriasContext = useContext(categoriaContext);
    const { eliminarCategoria } = categoriasContext;

    const [show, setShow] = useState(false);
    const [categoria, setCategoria] = useState({
        _id: '',
        titulo: '',
        descripcion: ''
    });

    function cambiaEdita(valor,objeto){
        setShow(valor);
        setCategoria(objeto);
    }

    function cambiaNuevo(valor){
        setShow(valor);
        setCategoria({
            _id: '',
            titulo: '',
            descripcion: ''
        });
    }

    function cambiaElimina(id){
        eliminarCategoria(id);
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
                <Button variant="success" onClick={() => cambiaNuevo(true)} >Nueva Categoria</Button>
            </div>
            <Table responsive striped bordered hover  variant="dark">
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Título</th>
                        <th>Descripción</th>
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
                <NuevaCategoria categoriaobj={categoria} cierraVentana={cierraVentana} />
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}
