import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import HistoriaContext from '../../context/historias/historiaContext';

export default function ListadoHistorias(categoria) {

    // Extraer proyectos de state inicial
    const historiasContext = useContext(HistoriaContext);
    const { historias, obtenerHistorias } = historiasContext;

    const [show, setShow] = useState(false);
    const [infocard, setInfoCard] = useState({})

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
                        historias.length === 0 ? <p style={{color: "white"}}>Sin historias</p> : 
                        historias.map((historia, index) => {
                            //console.log(historia)
                            return (
                                <Card key={index} style={{ width: '18rem' }} bg="dark" text="white" className="card-custom mx-2 mb-3">
                                    {/* <Card.Img variant="top" src={require('../../imagenes/HauntedHouse1.jpg')} /> */}
                                    <Card.Body>
                                        <Card.Title>{historia.titulo}</Card.Title>
                                        <Card.Text>
                                            {historia.descripcion}
                                        </Card.Text>
                                        {/* <Button variant="secondary" href="/historia" >Entrar</Button> */}
                                        <Button variant="secondary" onClick={() => {
                                            setShow(true);
                                            setInfoCard(historia);
                                        }} >
                                            Leer historia
                                        </Button>
                                        
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                        infocard={infocard}
                    >
                        <Modal.Header closeButton style={{backgroundColor:"gray",color:"white"}}>
                            <Modal.Title id="example-custom-modal-styling-title" >
                                {infocard.titulo}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{backgroundColor:"gray",color:"white"}}>
                            <p>
                                {infocard.historiaDetalle}
                            </p>
                        </Modal.Body>
                    </Modal>
                </Row>
            </Container>
        </div>
    );
}