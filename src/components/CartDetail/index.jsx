import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { pokeShop } from '../../context/PokeShopProvider';

const CartDetail = ({pokemon, indice}) => {
    console.log(indice);
    const {removeItem} = useContext(pokeShop);
    
    return (
        <>
            <tr>
                <td>{indice}</td>
                <td><img src={pokemon.pokemon.img} alt=''/></td>
                <td>{pokemon.pokemon.id}</td>
                <td className = 'px-3'>
                    {pokemon.quantity}
                </td>
                <td>
                    <Button variant = "dark" onClick = {()=>removeItem(pokemon.pokemon.id)}>
                        X
                    </Button>
                </td>
            </tr>
        </>
    )
}

export default CartDetail


