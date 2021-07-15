import { Card } from "react-bootstrap";
import './styles.css';
import { Link } from "react-router-dom";

const Item = ({pokemon}) => {

    return (
        <Card className = "p-3 m-3">
            <Link to={`/detail/${pokemon.id}`} style={{ textDecoration: 'none' }}>
                <Card.Img variant="top" src={pokemon.img} />
                <Card.Body>
                    <Card.Text className='name'>
                        {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
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
                </Card.Body>
            </Link>
        </Card>
    )
}

export default Item
