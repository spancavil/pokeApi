import { Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import './styles.css'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    function addHandler() {
        if (count > stock) {
            return
        }
        else if (count < stock) {
            let aux = count + 1
            setCount(aux)
        }
    }

    function removeHandler(){
        if (count<=1){
            return
        }
        else {
            let aux = count - 1
            setCount(aux)
        }
    }

    return (
        <Container>
            <Col>
                <Row>
                    <Button variant="pepe" onClick={()=>removeHandler()} size="md">
                    -
                    </Button>
                    <span className="m-3">{count}</span>
                    <Button variant="pepe" onClick={()=>addHandler()} size="md">
                    +
                    </Button>
                </Row>
                <Row>
                    <Button variant="pepe" onClick={()=>onAdd(count)} size="md" className="mt-3">
                        A la pokebola!
                    </Button>          
                </Row>
            </Col>
        </Container>
    )
}

export default ItemCount
