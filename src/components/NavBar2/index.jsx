import CartWidget from '../CartWidget'
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar2 = () => {
    return (
        <>
        <Navbar bg="dark" variant= "dark" expand="lg" className='px-3'>
        <Navbar.Brand className='text-white'>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
                Poke-shop
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className='p-3' id="basic-navbar-nav">
            <Nav className="p-3">
            <NavLink to= '/' style={{ textDecoration: 'none' }} activeClassName='currentCategory' className='text-white m-3'> Home</NavLink>
            <NavLink to= {`/category/normal`} style={{ textDecoration: 'none' }} activeClassName='currentCategory' className='text-white m-3'>Normal</NavLink>
            <NavLink to= {`/category/grass`} style={{ textDecoration: 'none' }} activeClassName='currentCategory' className='text-white m-3'>Grass</NavLink>
            </Nav>
            <CartWidget></CartWidget>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default NavBar2;
