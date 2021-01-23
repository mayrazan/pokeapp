    import React, { useState, useEffect } from "react";
    import Pokemon from "../../Pokemon.js";
    import { useDialog } from 'react-st-modal';
    import axios from 'axios';
    import { getDetailedPokemon } from '../../services/detailPokemonAPi.js'

    export function Detalhar(id) {
      // use this hook to control the dialog

     const [pokes, setPokes]=useState([]);
     const [hp, setHp]=useState([]);

    let getPokes = async () => {
  try {
 await axios.get(`https://pokeapi.co/api/v2/pokemon/${id.id}`).then((response) => {
   
    console.log(response.data);
    setPokes(response.data);  // set State
 })



  } catch (err) {
    console.error(err.message);
  }
};
  
  useEffect(()=>{ getPokes() },[])  // includes empty dependency array


return (
    <div>
     <h1 align="center">Nome: {pokes.name}</h1>
     <ul>
       <li>altura (m): {(pokes.height/3).toFixed(2)}</li>
       <li>XP minimo (pts): {pokes.base_experience}</li>
       <li>peso (kg): {(pokes.height/4).toFixed(2)}</li>
       {/* {pokes.stats.map((stats) =>
         <li>{stats.stat.name}: {stats.base_stat}</li>
       )}  */}
     </ul>
    </div>
  );
}


