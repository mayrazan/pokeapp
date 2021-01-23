import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import ImagemPO from "../../assets/pokemon-logo.png";

export function NavBarPage() {
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
        <Form inline>
          <FormControl
            type="text"
            placeholder="Pesquisar"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Busca Pokemon</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
