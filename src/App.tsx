import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRecoilState } from "recoil";
import { pokemonsState } from "./store/pokemons";
import axios from "axios";
import PokemonCardList from "./components/PokemonCardList";

function App() {
  const [pokemons, setPokemons] = useRecoilState(pokemonsState);

  const fetchPokemons = async () => {
    const results = await axios.get(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );

    const fetchedPokemons = results?.data?.pokemon;

    if (Boolean(fetchedPokemons?.length)) {
      setPokemons(fetchedPokemons);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-slate-100">
      <PokemonCardList pokemons={pokemons} />
    </div>
  );
}

export default App;
