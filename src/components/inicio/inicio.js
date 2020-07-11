import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function Inicio() {
    return (
        <div>
            <Container>
                <Image src={require('../../imagenes/inicio.jpg')} className="" fluid/>
            </Container>            
        </div>
    )
}
