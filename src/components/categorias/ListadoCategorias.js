import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CategoriaContext from '../../context/categorias/categoriaContext';
//import Historia from '../historias/Historia';

export default function ListadoCategorias() {

    // Extraer proyectos de state inicial
    const categoriasContext = useContext(CategoriaContext);
    const { categorias } = categoriasContext;

    return (
        <div>
            <Container fluid>
                <Row className="mt-5 justify-content-center">
                    {
                        categorias.map((categoria, index) => {
                            return (
                                <Card style={{ width: '18rem' }} bg="dark" text="white" className="card-custom mx-2 mb-3">
                                    <Card.Img variant="top" src={require('../../imagenes/HauntedHouse1.jpg')} />
                                    <Card.Body>
                                        <Card.Title>{categoria.titulo}</Card.Title>
                                        <Card.Text>
                                            Historias sobre casas embrujadas
                                        </Card.Text>
                                        <Button variant="secondary" href="/ListadoHistorias" >Entrar</Button>
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