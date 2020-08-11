import React, { useState, useContext, useEffect } from 'react'
import historiaContext from '../../context/historias/historiaContext';
import categoriaContext from '../../context/categorias/categoriaContext';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NuevaHistoria = ({ obj, cierraVentana }) => {

    // Obtener el state del formulario ctaegorias
    const categoriasContext = useContext(categoriaContext);
    const { categoriasTodas , obtenerCategoriasTodas } = categoriasContext;

    // Obtener el state del formulario historias
    const historiasContext = useContext(historiaContext);
    const { errorFormulario, agregarHistoria, mostrarError, actualizarHistoria } = historiasContext;

    //Extraer info
    const { titulo, descripcion, historiaDetalle, categoria, _id, active } = obj;

    useEffect(() => {
        obtenerCategoriasTodas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // State para historia
    const [historia, guardarHistoria] = useState({
        _id: _id,
        titulo: titulo,
        descripcion: descripcion,
        historiaDetalle: historiaDetalle,
        categoria: categoria,
        active: active
    });

    // //Extraer nombre
    // const { titulo, descripcion, historiaDetalle, categoria } = historia;

    // Lee contenidos del input
    const onChangeHistoria = e => {
        guardarHistoria({
            ...historia,
            [e.target.name]: e.target.value
        });
    }

    const onCheckBox = (e) => {
        //console.log(e.target.checked);
        guardarHistoria({
            ...historia,
            active : e.target.checked
        })
    }

    // Cuando el usuario envia un proyecto
    const onSubmitHistoria = (event) => {
        //e.preventDefault();
        //const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        event.target.reset();

        //validacion
        if (historia.titulo === '' || historia.descripcion === '' || historia.historiaDetalle === '' || historia.categoria === '') {
            mostrarError();
            return;
        }

        if (_id !== '') {
            actualizarHistoria(historia);
        }
        else {
            agregarHistoria(historia);
        }

        //console.group("sssok");

        // agregar al state
        //agregarHistoria(historia);

        // reiniciar el form
        guardarHistoria({
            _id: '',
            titulo: '',
            descripcion: '',
            historiaDetalle: '',
            categoria: ''
        });

        cierraVentana(false);
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
        <Container style={{ color: 'white' }}>
            <Form noValidate onSubmit={onSubmitHistoria} >
                {_id ? <Form.Label style={{ color: "white" }}>EDITANDO HISTORIA</Form.Label>
                    : <Form.Label style={{ color: "white" }}>NUEVA HISTORIA</Form.Label>}
                <Form.Group controlId="sss" style={{ display: "none" }}>
                    <Form.Label>id</Form.Label>
                    <Form.Control type="text" name="_id" defaultValue={_id} onChange={onChangeHistoria} placeholder="título" />
                </Form.Group>

                <Form.Group controlId="formCategoria">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control as="select" name="categoria" value={historia.categoria} onChange={onChangeHistoria}>
                        <option value="">-- Selecciona categoria --</option>
                        {
                            categoriasTodas.map((categoria, index) => {
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
            </Form>
            {errorFormulario ? <p style={{ color: "red" }}>Todos los campos son obligatorios</p> : null}
        </Container>
    );
}

export default NuevaHistoria;