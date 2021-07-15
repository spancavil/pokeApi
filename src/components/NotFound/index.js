import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className= "text-center p-3">
            <h4 className=""> Sitío no encontrado </h4>
            <Button variant="dark">
                <Link to='/' > Volver a home</Link>
            </Button>
        </Container>
    )
}

export default NotFound
