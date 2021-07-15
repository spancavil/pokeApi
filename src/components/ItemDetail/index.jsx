import React, { useContext, useState } from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { pokeShop } from '../../context/PokeShopProvider';
import ItemCount from '../ItemCount';
import Swal from 'sweetalert2';

const ItemDetail = ({pokemon}) => {
    
    const[flag,setFlag] = useState(true);
    const {addItem, cart} = useContext(pokeShop)

    function onAdd (count){
        Swal.fire({
            title: `Compraste ${count} ${pokemon.name}`,
            timer: 1000,
            width: '350px'
        })
        addItem(count, pokemon.id);
        setFlag(false);
    }

    return (
        <Card className = "p-3 m-3">
            <Row>
                <Col xs={7}>
                    <Card.Img src={pokemon.img} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Text className='name'>
                            Detalle: {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                        </Card.Text>

                        <Card.Text>
                            Habilidades:
                        </Card.Text>

                        {pokemon.abilities.map((ability,index) => {
                            return(
                                <Card.Text key={index}>
                                    {ability}
                                </Card.Text>
                                ) 
                            })
                        }
                    {flag?
                    <ItemCount onAdd = {onAdd} stock ={pokemon.stock}></ItemCount>:
                    <Button variant='dark'>
                        <Link to = {'/cart'} style={{ textDecoration: 'none', color:'white'}}>
                            Ir al carrito
                        </Link>
                        {console.log(cart)}
                    </Button>
                    }
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default ItemDetail;
