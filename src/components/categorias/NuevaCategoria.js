import React, { useState, useContext } from 'react'
import categoriaContext from '../../context/categorias/categoriaContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NuevaCategoria = () => {

    // Obtener el state del formulario
    const categoriasContext = useContext(categoriaContext);
    const { errorFormulario, agregarCategoria, mostrarError } = categoriasContext;

    // State para proyecto
    const [categoria, guardarCategoria] = useState({
        titulo: '',
        descripcion: ''
    });

    //Extraer nombre
    const { titulo, descripcion } = categoria;

    // Lee contenidos del input
    const onChangeCategoria = e => {
        guardarCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    // Cuando el usuario envia un proyecto
    const onSubmitCategoria = event => {
        //e.preventDefault();
        //const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        event.target.reset();

        //validacion
        if (titulo === '' || descripcion === '') {
            mostrarError();
            return;
        }

        //console.group("sssok");
 
        // agregar al state
        agregarCategoria(categoria);

        // reiniciar el form
        guardarCategoria({
            titulo: '',
            descripcion: ''
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
            <Form noValidate onSubmit={onSubmitCategoria} >
                <Form.Label >NUEVA CATEGORIA</Form.Label>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control required type="text" name="titulo" defaultValue={titulo} onChange={onChangeCategoria} placeholder="título" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control required as="textarea" rows="3" name="descripcion" defaultValue={descripcion} onChange={onChangeCategoria} placeholder="Descripción" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Crear
                </Button>
            </Form>
            {errorFormulario ? <p style={{color:"white"}}>Todos los campos son obligatorios</p> : null}
        </Container>

        // <Fragment>
        //     <button
        //         type="button"
        //         className="btn btn-block btn-primario"
        //         onClick={onClickFormulario}
        //     >Nueva Categoria</button>
        //     {
        //         formulario ?
        //             <form
        //                 className="formulario-nuevo-proyecto"
        //                 onSubmit={onSubmitCategoria}
        //             >
        //                 <input
        //                     type="text"
        //                     autoFocus
        //                     className="input-text"
        //                     placeholder="Titulo categoria"
        //                     name="titulo"
        //                     value={titulo}
        //                     onChange={onChangeCategoria}
        //                 />
        //                 <input
        //                     type="text"
        //                     autoFocus
        //                     className="input-text"
        //                     placeholder="Descripcion categoria"
        //                     name="descripcion"
        //                     value={descripcion}
        //                     onChange={onChangeCategoria}
        //                 />
        //                 <input
        //                     type="submit"
        //                     className="btn btn-primario btn-block"
        //                     value="Agregar categoria"
        //                 />
        //             </form>
        //             :
        //             null
        //     }

        //     {errorformulario ? <p className="mensaje error">El nombre de la categoria es obligatorio</p> : null}
        // </Fragment>



    );
}

export default NuevaCategoria;