import React, { useContext, useState } from 'react'
import { pokeShop } from '../../context/PokeShopProvider';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import firebase from 'firebase';
import { getFirestore } from '../../firebase';

const Checkout = () => {

    const { cart, total, cleanCart } = useContext(pokeShop)

    const [form, setForm] = useState({ email: "", name: "", phone: "" });

    async function actualizarStock(newOrder){

        console.log(newOrder.pedido);
        const db = getFirestore();

        const pokemonsActualizar = db.collection("pokemons")
            .where(firebase.firestore.FieldPath.documentId(), 'in', newOrder.pedido.map(element => element.id));

        const query = await pokemonsActualizar.get();
        const batch = db.batch();
        const outOfStock = [];

        query.docs.forEach((docSnapshot, index)=> {
            if (docSnapshot.data().stock>= newOrder.pedido[index].qty){

                batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - newOrder.pedido[index].qty})

            } else {
                
                outOfStock.push({...docSnapshot.data(), id: docSnapshot.id})
            }
        })
        
        if (outOfStock.length === 0){
            await batch.commit();

        } else {
            Swal.fire("Algunos de los productos elegidos carecen de stock!");
        }

        // const batch = db.batch();
        // const itemsRef = db.collection("pokemons");
        // pokemons.forEach(
        //     (pokemon) => {
        //         batch.update(itemsRef.doc(pokemon.id), { stock: obj.item.stock });
        //     }
        // )

        // batch.commit().then(() => {
        //     cleanCart();
        //     setBuyer({ name: '', phone: '', email: '' });
        //     setForm({ email: "", name: "", phone: "" });
        // });

    }

    function dispatchOrder(newOrder){
        const db = getFirestore();
        const orders = db.collection("orders");
        orders.add(newOrder).then( ({id})=>{
            Swal.fire(`Orden cargada, conserve el id: ${id}. Gracias!`);
            actualizarStock(newOrder);
        })
        .catch(e=>{
            Swal.fire('Ha ocurrido un error inesperado!');
        })
        .finally(()=>{
        })
    }

    function validarDatos(){
        if (form.email.includes("@") && form.name !== null && form.phone !==null){
        
            const newOrder = {
                buyer: {
                    name: form.name,
                    phone: form.phone,
                    email: form.email},
                pedido: cart.map(element => ({
                    name: element.pokemon.name,
                    id: element.pokemon.id,
                    qty: element.quantity
                })),
                fecha: (new Date()).toLocaleString(),
                total: total()
            }
            dispatchOrder(newOrder);
            
        } else {
            Swal.fire ("Ingrese datos válidos")         
        }
    }

    return (
        <Form className='p-3 m-3 text-center'>
            <Row className="text-center">
                Your checkout
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" onInput={(e) => setForm({ ...form, email: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Nombre </Form.Label>
                    <Form.Control type="text" placeholder="Nombre" onInput={(e) => setForm({ ...form, name: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="number" placeholder="Teléfono" onInput={(e) => setForm({ ...form, phone: e.target.value })} />
                </Form.Group>

            </Row>
            <Button variant="primary" onClick={validarDatos}size="sm">
                Finalizar compra
            </Button>
        </Form>
    )
}

export default Checkout;
