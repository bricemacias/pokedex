import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRecoilState } from "recoil";
import { pokemonsState } from "./store/pokemons";
import axios from "axios";
import PokemonCardList from "./components/PokemonCardList";
import styled from "styled-components";
// import Header from "./components/layout/Header";

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

  return <PokemonCardList pokemons={pokemons} />;
}

export default App;
