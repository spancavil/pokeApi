import { createContext, useState, useEffect } from 'react';
import { getFirestore } from '../firebase';
import firebase from 'firebase';
//import { fetchingAll, fetchSingle } from '../libs';

//Creamos un contexto de React
export const pokeShop = createContext([]);

//Esto será lo que exportaremos para usar en la App. También debemos recibir el children correspondiente, que será todo lo que está DENTRO del provider en mi app.
const PokeShopProvider = ({ children }) => {

    const [pokemons, setPokemons] = useState([]);
    const [cart, setCart] = useState([]);

    const addItem = (quantity, productId) => {
        const indexProductoRepetido = cart.findIndex(element => element.pokemon.id === productId);
        if (indexProductoRepetido !== -1) {
            let cartAux = [...cart];
            cartAux[indexProductoRepetido].quantity += quantity;
            setCart(cartAux);
        } else {
            const productoParaAgregar = pokemons.find(element => element.id === productId)
            const cartAux = [...cart, {
                pokemon: productoParaAgregar,
                quantity: quantity
            }];
            setCart(cartAux);
        }
    }

    const removeItem = (productId) => {
        let cartAux = [...cart];
        cartAux = cartAux.filter(element => element.pokemon.id !== productId);
        setCart(cartAux);
    }

    const cleanCart = () => {
        setCart([]);
    }

    const total = () => {
        const cantidadTotal = cart.reduce((acumulator, currentElement)=>(acumulator + currentElement.quantity), 0);
        return cantidadTotal;
    }

    useEffect(() => {

        (async () => {
            // Traer pokemons utilizando la poke API

            // let lista = await fetchingAll (100);
            // let urls = lista.map( element => element.url);
            // let pokemons = [];
            // for (const url of urls) {
            //     pokemons.push( await fetchSingle(url));
            // }

            //Traer los pokes utilizando firestore
            const db = getFirestore();
            const itemCollection = db.collection("pokemons");
            itemCollection.get().then(snapShot => {
                if (snapShot.size === 0) {
                    console.log("No hay pokemons cargados!");
                } else (setPokemons(snapShot.docs.map(doc => (doc.data()))));
            });
        })();

        return () => {
        }
    }, [])

    console.log(pokemons);

    //Devolvemos un context con los valores definidos.
    return (
        <pokeShop.Provider value={{ cart, pokemons, addItem, removeItem, cleanCart, total}}>
            {children}
        </pokeShop.Provider>
    )
}

export default PokeShopProvider;