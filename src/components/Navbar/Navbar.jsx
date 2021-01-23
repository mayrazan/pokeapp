import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import ImagemPO from "../../assets/pokemon-logo.png";

export function NavBarPage({ children }) {
  return (
    <Navbar bg="ligth" expand="lg">
      <Navbar.Brand href="/">
        {" "}
        <img src={ImagemPO} width="200px" alt="logo" />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Todos os Pokemons</Nav.Link>
          <Nav.Link href="/my-pokemons">Meus Pokemons</Nav.Link>
        </Nav>
        {children}
      </Navbar.Collapse>
    </Navbar>
  );
}
