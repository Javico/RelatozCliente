import React, { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CategoriaContext from '../../context/categorias/categoriaContext';
//import Historia from '../historias/Historia';

export default function ListadoCategorias() {

    // Extraer proyectos de state inicial
    const categoriasContext = useContext(CategoriaContext);
    const { categorias, obtenerCategorias } = categoriasContext;

    useEffect(() => {
        obtenerCategorias();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Container fluid>
                <Row className="mt-5 justify-content-center">
                    {
                        categorias.map((categoria, index) => {
                            return (
                                <Card key={index} style={{ width: '18rem' }} bg="dark" text="white" className="card-custom mx-2 mb-3">
                                    <Card.Img variant="top" src={require('../../imagenes/HauntedHouse1.jpg')} />
                                    <Card.Body>
                                        <Card.Title>{categoria.titulo}</Card.Title>
                                        <Card.Text>
                                            {categoria.descripcion}
                                        </Card.Text>
                                        <Button 
                                            variant="secondary" 
                                            href={`/ListadoHistorias/${categoria._id}`}
                                        >Entrar</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }           
                </Row>     
            </Container>
        </div>
    );
}