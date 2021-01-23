import React, { useState, useEffect } from "react";
import axios from "axios";

export function Detalhar(id) {
  // use this hook to control the dialog

  const [pokes, setPokes] = useState([]);

  let getPokes = async () => {
    try {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id.id}`)
        .then((response) => {
          console.log(response.data);
          setPokes(response.data); // set State
        });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPokes();
  }, []); // includes empty dependency array

  return (
    <div>
      <img alt=""
      key={pokes.id}
        src={pokes.sprites ? pokes.sprites.front_default : ""}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          scrollMarginBottom: "inherit",
          paddingBottom: "2%",
        }}
      ></img>
      <h2
        align="center"
        style={{ marginTop: "-5%", marginBottom: "10%" }}
      >
        Name: {pokes.name}
      </h2>
      <ul
        style={{
          display: "grid",
          justifyContent: "center",
          marginRight: "3%",
        }}
      >
        <li key={pokes.id}>height (m): {(pokes.height / 3).toFixed(2)}</li>
        <li>XP base (pts): {pokes.base_experience}</li>
        <li>weight (kg): {(pokes.height / 4).toFixed(2)}</li>
        {pokes.stats &&
          pokes.stats.map((stats) => (
            <li>
              {stats.stat.name}: {stats.base_stat}
            </li>
          ))}
        <li>
          {" "}
          Attacks:
          <ul
            style={{
              display: "grid",
              justifyContent: "center",
              marginRight: "3%",
            }}
          >
            {pokes.moves &&
              pokes.moves.map((stats) => <li>{stats.move.name}</li>)}
          </ul>
        </li>
      </ul>
    </div>
  );
}
