import { Container, Row, Col} from "react-bootstrap";
import Item from "../Item";

const ItemList = ({pokemons}) => {
    return (
        <Container>
            <Row>
                {pokemons.map((pokemon,index)=> { 
                    return(
                        <Col key={index}>
                            <Item pokemon={pokemon}></Item>
                        </Col>)
                    })
                }
            </Row>
        </Container>

    )
}

export default ItemList;