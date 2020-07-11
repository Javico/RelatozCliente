import React, { Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Historia() {
    return (
        <Fragment>
            <Container>
                <Row xs={3} md={5} lg={7}>
                    <Col><Button variant="secondary" href="/ListadoHistorias" >Regresar a historias</Button></Col>
                </Row>
            </Container>
            <br />
            <Container>
                <Jumbotron>
                    <Container>
                        <h4>La casa emrbujada 1</h4>
                        <p>
                            La Llorona es un espectro del folclore hispanoamericano que, según la tradición oral, es el alma en pena de una mujer que ahogó a sus hijos, y que luego, arrepentida y maldecida, los busca por las noches por ríos, pueblos y ciudades, asustando con su sobrecogedor llanto a quienes la ven u oyen. Su leyenda posee gran diversidad de versiones, con generalidades y particularismos propios de muchas regiones geográficas. A pesar de ello, su relato mágico y sobrenatural, emergido de múltiples orígenes, es constante y reconocible, con añadidos, texturizaciones e hibridaciones de muy diversos tipos.

                            La leyenda de la Llorona es antigua, tiene orígenes prehispánicos, en la forma de diversos personajes con características similares, presentes en las cosmogonías y creencias ancestrales de los pueblos autóctonos de América, transmitidos de forma oral de generación en generación, hallándose relatos comunes pero con diversas imágenes, emblemas y símbolos, lo que le da a la leyenda una rica diversidad cultural. Durante la época colonial, las generalidades de la leyenda tomaron forma, y a través del tiempo, la leyenda de la Llorona se ha convertido en parte del imaginario colectivo de Hispanoamérica, trascendiendo fronteras y volviéndose parte de la identidad cultural, el folclor y la imaginería popular de muchos países. En la actualidad, la leyenda continúa siendo muy popular desde México hasta Chile, así como en los estados del sur de los Estados Unidos con mayor población de habla hispana, como Arizona, Texas y Nuevo México. En el caso particular de México, el personaje de la Llorona es signo de identidad nacional y Patrimonio Cultural Intangible de la Ciudad de México.1

                            La leyenda de la Llorona ha tenido muchas funciones: ha servido para espantar a los niños, a extraer el miedo a hombres y mujeres para que sean fieles a sus parejas, para evitar parricidios por parte de la madre, como parábola de la justicia divina, o como símbolo colectivo. A lo largo de la historia, la figura doliente de la Llorona, su trágica y eterna condena de vagar a través de los siglos sin poder hallar a sus hijos, ha inspirado gran cantidad de manifestaciones culturales, literatura, canciones de la lírica popular, obras de teatro, bibliografía y artes audiovisuales de cine y televisión.
                    </p>
                    </Container>
                </Jumbotron>
            </Container>
        </Fragment>
    )
}
