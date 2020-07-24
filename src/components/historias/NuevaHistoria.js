import React, { useState, useContext, useEffect } from 'react'
import historiaContext from '../../context/historias/historiaContext';
import categoriaContext from '../../context/categorias/categoriaContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NuevaHistoria = () => {

    // Obtener el state del formulario ctaegorias
    const categoriasContext = useContext(categoriaContext);
    const { categorias, obtenerCategorias } = categoriasContext;

    // Obtener el state del formulario historias
    const historiasContext = useContext(historiaContext);
    const { errorFormulario, agregarHistoria, mostrarError } = historiasContext;

    useEffect(() => {
        obtenerCategorias();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // State para proyecto
    const [historia, guardarHistoria] = useState({
        titulo: '',
        descripcion: '',
        historiaDetalle: '',
        categoria: ''
    });

    //Extraer nombre
    const { titulo, descripcion, historiaDetalle, categoria } = historia;

    // Lee contenidos del input
    const onChangeHistoria = e => {
        guardarHistoria({
            ...historia,
            [e.target.name]: e.target.value
        });
    }

    // Cuando el usuario envia un proyecto
    const onSubmitHistoria = event => {
        //e.preventDefault();
        //const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        event.target.reset();

        //validacion
        if (titulo === '' || descripcion === '' || historiaDetalle === '' || categoria === '') {
            mostrarError();
            return;
        }

        //console.group("sssok");
 
        // agregar al state
        agregarHistoria(historia);

        // reiniciar el form
        guardarHistoria({
            titulo: '',
            descripcion: '',
            historiaDetalle: '',
            categoria: ''
        });       
    }

    // const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     }

    //     setValidated(true);
    // };

    return (
        <Container style={{color: 'white'}}>
            <Form noValidate onSubmit={onSubmitHistoria} >
                <Form.Label >NUEVA HISTORIA</Form.Label>

                <Form.Group controlId="formCategoria">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control as="select" name="categoria" onChange={onChangeHistoria}>
                    <option value="">-- Selecciona categoria --</option>
                    {
                        categorias.map((categoria, index) => {
                            //console.log(categoria);
                            return (
                                <option key={categoria._id} value={categoria._id}>{categoria.titulo}</option>
                            )
                        })
                    } 
                    </Form.Control>     
                </Form.Group>

                <Form.Group controlId="formTitulo">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control required type="text" name="titulo" defaultValue={titulo} onChange={onChangeHistoria} placeholder="título" />
                </Form.Group>

                <Form.Group controlId="formDesc">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control required as="textarea" rows="3" name="descripcion" defaultValue={descripcion} onChange={onChangeHistoria} placeholder="Descripción" />
                </Form.Group>

                <Form.Group controlId="formHistoria">
                    <Form.Label>Historia</Form.Label>
                    <Form.Control required as="textarea" rows="6" name="historiaDetalle" defaultValue={historiaDetalle} onChange={onChangeHistoria} placeholder="Historia" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Crear
                </Button>
            </Form>
            {errorFormulario ? <p style={{color:"white"}}>Todo los campos son obligatorios</p> : null}
        </Container>
    );
}

export default NuevaHistoria;