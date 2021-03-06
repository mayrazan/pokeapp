import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { PokemonCard } from "../components/Card/PokemonCard";
import { MyPokemons } from "../components/MyPokemons/MyPokemons";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PokemonCard} exact />
        <Route path="/my-pokemons" component={MyPokemons} exact />
      </Switch>
    </Router>
  );
}
