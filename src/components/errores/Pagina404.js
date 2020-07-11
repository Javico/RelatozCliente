import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function Pagina404() {
    return (
        <div>
            <Jumbotron>
                <h1>Page not found</h1>
                <p>
                    ¬¬
                </p>
                <p>
                    <Button variant="secondary" href="/">Inicio</Button>
                </p>
            </Jumbotron>
        </div>
    );
}
