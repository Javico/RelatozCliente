import React, { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import HistoriaContext from '../../context/historias/historiaContext';

export default function ListadoHistorias(categoria) {
    
    // Extraer proyectos de state inicial
    const historiasContext = useContext(HistoriaContext);
    const { historias, obtenerHistorias } = historiasContext;

    //console.log(categoria.match.params.id);
    useEffect(() => {
        obtenerHistorias(categoria.match.params.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Container fluid>
                <Row className="mt-5 justify-content-center">
                    {
                        historias.map((historia, index) => {
                            return (
                                <Card key={index} style={{ width: '18rem' }} bg="dark" text="white" className="card-custom mx-2 mb-3">
                                    <Card.Img variant="top" src={require('../../imagenes/HauntedHouse1.jpg')} />
                                    <Card.Body>
                                        <Card.Title>{historia.titulo}</Card.Title>
                                        <Card.Text>
                                            {historia.descripcion}
                                        </Card.Text>
                                        <Button variant="secondary" href="/historia" >Entrar</Button>
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