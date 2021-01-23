import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { NavBarPage } from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

export function NavBarSearch({ pokes, setPokes }) {
  const [input, setInput] = useState("");

  function onChange(event) {
    setInput(event.target.value);
  }

  async function onSubmit() {
    if (input === "") {
      return pokes;
    } else {
      return await pokes.filter((pokemon) => {
        return pokemon.name.toLowerCase().indexOf(input) > -1;
      });
    }
  }

  async function getSearchedList() {
    const data = await onSubmit();
    setPokes(data);
    console.log(pokes);
  }

  return (
    <NavBarPage>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Pesquisar"
          className="mr-sm-2"
          onChange={onChange}
        />
        <Button variant="outline-success" onClick={() => getSearchedList()}>
          Busca Pokemon
        </Button>
      </Form>
    </NavBarPage>
  );
}
