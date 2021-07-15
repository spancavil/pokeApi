import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../../components/ItemList';
import { pokeShop } from "../../context/PokeShopProvider";
import Swal from 'sweetalert2';

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [poke, setPoke] = useState([]);
    const {pokemons} = useContext(pokeShop);

    //Este efecto se realiza cuando se termina de montar el componente
    useEffect(() => {
        const getData = () => {
            if (categoryId){
                Swal.fire({
                    icon:'info',
                    title: `Seleccionaste la categoría: ${categoryId}`,
                    timer: 1000,
                    width: '350px'
                })
                const pokemonsFilter = pokemons.filter(pokemon=>pokemon.type === categoryId);
                console.log(pokemonsFilter);
                setPoke(pokemonsFilter);
            } else {
                console.log(pokemons);
                setPoke(pokemons);
            }
        }
        getData();

        return () => {
        }
    }, [categoryId, pokemons])

    return(
        <>
            {poke.length === 0 ? 
            <h1>Loading...</h1> :
            <ItemList pokemons={poke}></ItemList>}
        </>
    )
}

export default ItemListContainer;