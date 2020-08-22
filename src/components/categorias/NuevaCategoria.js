import React, { useState, useContext } from 'react'
import categoriaContext from '../../context/categorias/categoriaContext';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NuevaCategoria = ({objota,cierraVentana}) => {

    // Obtener el state del formulario
    const categoriasContext = useContext(categoriaContext);
    const { errorFormulario, agregarCategoria, mostrarError, actualizarCategoria } = categoriasContext;

    //Extraer info
    const { titulo, descripcion, _id, active } = objota;

    // State para categoria
    const [categoria, guardarCategoria] = useState({
        _id: _id,
        titulo: titulo,
        descripcion: descripcion,
        active: active,
        archivo: null,
        url: ''
    });

    // Lee contenidos del input
    const onChangeCategoria = e => {
        guardarCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    const onCheckBox = (e) => {
        //console.log(e.target.checked);
        guardarCategoria({
            ...categoria,
            active : e.target.checked
        })
    }

    // imagen archivo
    const onChangeArchivo = (e) => {
        //console.log(e.target.checked);
        guardarCategoria({
            ...categoria,
            archivo : Array.from(e.target.files)
        })
    }

    // Cuando el usuario envia una categoria
    const onSubmitCategoria = event => {
        //e.preventDefault();
        //const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        event.target.reset();
        //console.log(categoria.titulo + " " + categoria.descripcion);
        //validacion
        if (categoria.titulo === '' || categoria.descripcion === '') {
            mostrarError();
            return;
        }

        //console.group("sssok");
 
        if(categoria._id !== ''){
            actualizarCategoria(categoria);
        }
        else{
            agregarCategoria(categoria);
        }

        // reiniciar el form
        guardarCategoria({
            _id: '',
            titulo: '',
            descripcion: '',
            active: false,
            archivo: null,
            url: ''
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
        <Container style={{color: 'white'}}>
            <Form noValidate onSubmit={onSubmitCategoria} >
                {_id ? 
                    <Form.Label style={{color: "white"}}>EDITANDO CATEGORIA</Form.Label>
                    :
                    <Form.Label style={{color: "white"}}>NUEVA CATEGORIA</Form.Label>
                }
                <Form.Group controlId="sss" style={{display:"none"}}>
                    <Form.Label>id</Form.Label>
                    <Form.Control type="text" name="_id" defaultValue={_id} onChange={onChangeCategoria} placeholder="título" />
                </Form.Group>
                <Form.Group controlId="tituloctrl">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control required type="text" name="titulo" defaultValue={titulo} onChange={onChangeCategoria} placeholder="título" />
                </Form.Group>

                <Form.Group controlId="descripcionctrl">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control required as="textarea" rows="3" name="descripcion" defaultValue={descripcion} onChange={onChangeCategoria} placeholder="Descripción" />
                </Form.Group>
                <Form.Group controlId="archivoctrl">
                    <Form.File id="archivo" name="archivo" label="Imagen" onChange={onChangeArchivo} />
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
            {errorFormulario ? <p style={{color:"red"}}>Todos los campos son obligatorios</p> : null}
        </Container>

    );
}

export default NuevaCategoria;