import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import CartDetail from '../../components/CartDetail';
import Checkout from '../../components/Checkout';
import { pokeShop } from '../../context/PokeShopProvider';

const CartContainer = () => {

    const {cart, cleanCart} = useContext(pokeShop);

    return (
        <>
        <Table striped bordered hover className= 'text-center align-middle' variant= "dark">
            <thead>
                <tr>
                    <th></th>
                    <th>Imagen</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th></th>
                    </tr>
            </thead>
            <tbody>
                {cart.map((pokemon,index)=>{
                    return <CartDetail indice = {index+1} pokemon = {pokemon}/>
                })}
                <tr>
                    <td className = 'text-right'colSpan = {5}>
                        <Button variant='dark' onClick={()=> cleanCart()}>
                            Limpiar el carrito
                        </Button>
                    </td>
                </tr>
            </tbody>
        </Table>
        <Checkout/>
        </>
    )
}

export default CartContainer