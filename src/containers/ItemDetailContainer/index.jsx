import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { pokeShop } from '../../context/PokeShopProvider';

const ItemDetailContainer = () => {
    const [poke, setPoke] = useState([]);
    const {pokemonName} = useParams();
    const {pokemons} = useContext(pokeShop)

    //Este efecto se realiza cuando se termina de montar el componente
    useEffect(() => {

        const getData = () => {

            //TRAER UN ITEM AL AZAR
            // let urls = lista.map( element => element.url);

            // let randomIndex = Math.floor(Math.random()*50);

            // setPoke(pokemon);

            const pokemonToShow = pokemons.find(element=>element.id === pokemonName);
            if (pokemonToShow) {
                setPoke(pokemonToShow);
            }
        }
        getData();

        return () => {
        }
    }, [pokemonName, pokemons]);

    return (
    <>
        {poke.length === 0 ?
            <h2>Loading... </h2>:
            <ItemDetail pokemon = {poke}></ItemDetail>
        }
    </>
    )
}

export default ItemDetailContainer;
