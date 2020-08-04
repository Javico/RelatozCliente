import React, { useState, useContext } from 'react'
import categoriaContext from '../../context/categorias/categoriaContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NuevaCategoria = ({categoriaobj,cierraVentana}) => {

    // Obtener el state del formulario
    const categoriasContext = useContext(categoriaContext);
    const { errorFormulario, agregarCategoria, mostrarError, actualizarCategoria } = categoriasContext;

    //Extraer info
    const { titulo, descripcion, _id } = categoriaobj;

    // State para categoria
    const [categoria, guardarCategoria] = useState({
        _id: _id,
        titulo: titulo,
        descripcion: descripcion
    });

    // Lee contenidos del input
    const onChangeCategoria = e => {
        guardarCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
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
 
        if(_id !== ''){
            actualizarCategoria(categoria);
        }
        else{
            agregarCategoria(categoria);
        }

        // reiniciar el form
        guardarCategoria({
            _id: '',
            titulo: '',
            descripcion: ''
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